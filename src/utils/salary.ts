import { sum } from 'temen';
import 간이세액표 from 'constants/간이세액표2022.json';
import 연령별소득분포 from 'constants/연령별소득분포2020.json';

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

export function getMonthlySalary(세전연봉: number) {
  const 월급여 = 세전연봉 / 12;

  const 국민연금 = getNationalPension(월급여);
  const 건강보험료 = 월급여 * 0.03495;
  const 장기요양보험료 = 건강보험료 * 0.1227;
  const 고용보험료 = 월급여 * 0.0065;
  const 소득세 = getIncomeTax(월급여);
  const 지방세 = 소득세 * 0.1;

  const 한달세금 = sum([국민연금, 건강보험료, 장기요양보험료, 고용보험료, 소득세, 지방세]);

  return Math.floor(월급여 - 한달세금);
}

function getIncomeRange(연령대: number) {
  if (연령대 < 20) {
    return 연령별소득분포['19세미만'];
  } else if (연령대 < 30) {
    return 연령별소득분포['30세미만'];
  } else if (연령대 < 40) {
    return 연령별소득분포['40세미만'];
  } else if (연령대 < 50) {
    return 연령별소득분포['50세미만'];
  } else if (연령대 < 60) {
    return 연령별소득분포['60세미만'];
  } else if (연령대 < 70) {
    return 연령별소득분포['65세미만'];
  } else if (연령대 >= 70) {
    return 연령별소득분포['65세이상'];
  } else {
    return 연령별소득분포['전체'];
  }
}

export function calcIncomeRange(월급여: number, 연령대: number) {
  const 소득분포 = getIncomeRange(연령대);
  console.log(소득분포, 월급여, 연령대);
  console.log(
    '분포',
    sum(
      Object.entries(소득분포)
        .filter(([key]) => key !== '평균' && key !== '중위')
        .map(([, value]) => value)
    )
  );

  return 월급여;
}
