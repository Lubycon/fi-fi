import { useMobileScreen } from 'common/hooks/useMobileScreen';
import colors from 'open-color';
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

  const 이전값 = Number(previous?.replaceAll('%', ''));
  const 현재값 = Number(real?.replaceAll('%', ''));
  const 예측값 = Number(prediction?.replaceAll('%', ''));

  const diff = 현재값 - 예측값;
  const interestRateSpreadTextColor = diff > 0 ? colors.red[5] : colors.blue[5];

  return (
    <Stack gutter={8} direction="column" align="center">
      <Txt size={isMobile ? 14 : 16}>{title}</Txt>
      <Txt>이전값: {`${이전값}%`}</Txt>
      <Txt size={isMobile ? 18 : 24} weight={600} color={interestRateSpreadTextColor}>
        {`${현재값}%`}
      </Txt>
      <Txt>예측값(가이던스): {`${예측값}%`}</Txt>
      <Txt>발표일: {announceDate}</Txt>
    </Stack>
  );
};

export default CountryCustomerPriceIndex;
