import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { Stack, Txt } from 'quantumic-design';

interface Props {
  title: string;
  rate?: string;
  nextDecision?: string;
}
const CountryInterestRate = ({ title, rate, nextDecision }: Props) => {
  const isMobile = useMobileScreen();

  return (
    <Stack gutter={8} direction="column" align="center">
      <Txt size={isMobile ? 14 : 16}>{title}</Txt>
      <Txt size={isMobile ? 18 : 24} weight={600}>
        {rate}
      </Txt>
      <Txt>다음 결정일: {nextDecision}</Txt>
    </Stack>
  );
};

export default CountryInterestRate;
