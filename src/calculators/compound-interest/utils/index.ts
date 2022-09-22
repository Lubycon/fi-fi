import { getArrayFromCount } from 'temen';

interface CalcOptions {
  원금: number;
  계산횟수: number;
  목표수익률: number; // %
}
export interface Output {
  횟수: number;
  수익: number;
  총금액: number;
  수익률: number;
}

const calcYield = (원금: number, 현재금액: number) => {
  return ((현재금액 - 원금) / 원금) * 100;
};

export const calcCompoundInterest = ({ 원금, 계산횟수, 목표수익률 }: CalcOptions): Output[] => {
  const result = getArrayFromCount(계산횟수).reduce<Output[]>(
    (prev, _, index) => {
      const last = prev[prev.length - 1];
      const 수익 = last.총금액 * (목표수익률 / 100);
      const 총금액 = last.총금액 + 수익;

      return [
        ...prev,
        {
          횟수: index + 1,
          수익,
          총금액,
          수익률: calcYield(원금, 총금액),
        },
      ];
    },
    [
      {
        횟수: 0,
        수익: 0,
        총금액: 원금,
        수익률: 0,
      },
    ]
  );

  return result;
};
