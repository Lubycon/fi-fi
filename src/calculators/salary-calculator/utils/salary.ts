import { sum } from 'temen';
import 간이세액표 from 'calculators/salary-calculator/constants/간이세액표2022.json';
import 근로소득백분위 from 'calculators/salary-calculator/constants/근로소득백분위.json';

function getIncomeTax(월급여: number) {
  const 소득구간 = 간이세액표.reduce((result, current) => {
    return 월급여 > current.급여 ? current : result;
  });

  return 소득구간.세금;
}

function getNationalPension(월급여: number) {
  const 소득상한 = 5_240_000;
  const 기준소득 = 월급여 >= 소득상한 ? 소득상한 : 월급여;
  return 기준소득 * 0.045;
}

export function getAllTax(세전연봉: number) {
  const 월급여 = 세전연봉 / 12;

  const 국민연금 = getNationalPension(월급여);
  const 건강보험료 = 월급여 * 0.03495;
  const 장기요양보험료 = 건강보험료 * 0.1227;
  const 고용보험료 = 월급여 * 0.0065;
  const 소득세 = getIncomeTax(월급여);
  const 지방세 = 소득세 * 0.1;

  const 계 = sum([국민연금, 건강보험료, 장기요양보험료, 고용보험료, 소득세, 지방세]);

  return {
    국민연금,
    건강보험료,
    장기요양보험료,
    고용보험료,
    소득세,
    지방세,
    계,
  };
}

export function getMonthlySalary(세전연봉: number) {
  const { 계 } = getAllTax(세전연봉);

  const 월급여 = 세전연봉 / 12;
  return Math.floor(월급여 - 계);
}

export function calcIncomeRange(세전연봉: number) {
  const 내분위 = 근로소득백분위.find(분위 => {
    const 소득금액 = (분위.근로소득금액 * 100000000) / 분위.인원;
    return 세전연봉 >= 소득금액;
  });

  return 내분위?.구분;
}

export function getSalaryTable(min: number, max: number) {
  const salary: number[] = [];
  for (let i = min; i <= max; i += 1000000) {
    salary.push(i);
  }

  return salary;
}
