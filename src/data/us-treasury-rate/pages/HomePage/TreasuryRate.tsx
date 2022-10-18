import { Stack, Txt } from 'quantumic-design';
import format from 'date-fns/format';
import { useTreasuryRate } from './useTreasuryRate';

interface Props {
  year: number;
}
const TreasuryRate = ({ year }: Props) => {
  const { data } = useTreasuryRate(year);

  return (
    <Stack direction="column" gutter={8} align="center">
      <Txt size={16}>{year}년물 금리</Txt>
      <Txt size={24} weight={600}>
        {data?.rate}%
      </Txt>
      <Txt size={12}>{data?.date != null ? format(new Date(data.date), 'yyyy년 MM월 dd일 기준') : ''}</Txt>
    </Stack>
  );
};

export default TreasuryRate;
