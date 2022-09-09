import { Txt } from 'quantumic-design';
import { calcIncomeRange } from 'utils/salary';
import colors from 'open-color';

interface Props {
  세전연봉: number;
}
const IncomeRangeResult = ({ 세전연봉 }: Props) => {
  return (
    <Txt color={colors.white} size={24} weight={700} lineHeight="40px">
      내가 받는 연봉은{' '}
      <Txt as="span" display="inline" color={colors.indigo[3]}>
        {calcIncomeRange(Number(세전연봉))}
      </Txt>{' '}
      에요.
    </Txt>
  );
};

export default IncomeRangeResult;
