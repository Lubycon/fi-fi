import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { Stack, Txt } from 'quantumic-design';

interface Props {
  title: string;
  previous?: string;
  real?: string;
  prediction?: string;
  announceDate?: string;
}
const CountryCustomerPriceIndex = ({ title, previous, real, prediction, announceDate }: Props) => {
  const isMobile = useMobileScreen();

  return (
    <Stack gutter={8} direction="column" align="center">
      <Txt size={isMobile ? 14 : 16}>{title}</Txt>
      <Txt>이전값: {previous}</Txt>
      <Txt size={isMobile ? 18 : 24} weight={600}>
        {real}
      </Txt>
      <Txt>예측값(가이던스): {prediction}</Txt>
      <Txt>발표일: {announceDate}</Txt>
    </Stack>
  );
};

export default CountryCustomerPriceIndex;
