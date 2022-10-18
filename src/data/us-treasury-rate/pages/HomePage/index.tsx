import { useEffect, useMemo } from 'react';
import { Card, Divider } from 'semantic-ui-react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/us-treasury-rate/components/ServiceHead';
import Layout from 'common/components/Layout';
import { Spacing, Stack, Txt } from 'quantumic-design';
import TreasuryRate from './TreasuryRate';
import { useTreasuryRate } from './useTreasuryRate';
import colors from 'open-color';
import { css } from '@emotion/css';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'us-treasury-rate/pages/HomePage';
 * ```
 */
const HomePage = () => {
  const { data: oneYearRate } = useTreasuryRate(1);
  const { data: tenYearsRate } = useTreasuryRate(10);

  const interestRateSpread = useMemo(() => {
    if (oneYearRate?.rate == null || tenYearsRate?.rate == null) {
      return 0;
    }

    const spread = tenYearsRate.rate - oneYearRate.rate;
    return spread;
  }, [oneYearRate?.rate, tenYearsRate?.rate]);

  const interestRateSpreadTextColor = interestRateSpread > 0 ? colors.red[5] : colors.blue[5];

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/us-treasury-rate/home_page');
    homePageLogger.view();
  }, []);
  return (
    <Layout pageTitle="실시간 미국채 금리">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Stack gutter={24} justify="center">
            <TreasuryRate year={1} />
            <TreasuryRate year={2} />
            <TreasuryRate year={3} />
            <TreasuryRate year={5} />
            <TreasuryRate year={10} />
            <TreasuryRate year={20} />
            <TreasuryRate year={30} />
          </Stack>
          <Spacing size={24} />
          <Divider />
          <Spacing size={24} />
          <Stack gutter={8} direction="column" align="center">
            <Txt size={16} weight={600}>
              미국채 1년물/10년물 장단기 금리차
            </Txt>
            <Txt size={36} weight={800} color={interestRateSpreadTextColor}>
              {`${interestRateSpread.toFixed(2)}%`}
            </Txt>
          </Stack>
          <Spacing size={24} />
          <Divider />
          <Spacing size={24} />
          <Txt as="h3">장단기 금리차는 무엇을 의미하나요?</Txt>
          <Txt as="p">
            채권 금리는 우리가 누군가에게 돈을 빌려줄 때 받을 수 있는 이자를 의미해요.
            <br />
            채권을 발행한 사람은 채권을 팔면서 현금을 얻게 되는 것이나 마찬가지이기 때문에, 채권을 산 사람은 채권에
            적혀있는 금리에 따라 이자를 받을 수 있는 것이죠.
            <br />
            이러한 채권 중에서도 국채는 말 그대로 국가가 발행한 채권이에요. 즉, 국채 금리는 우리가 국가에게 돈을 빌려줄
            때 받을 수 있는 이자를 의미하는 것이죠.
            <br />
            <br />
            일반적으로 우리는 국가에게 돈을 오래 빌려줄 수록 더 높은 이자를 받아요. 결국 돈을 빌려준다는 것은 일정 기간
            동안 내 돈이 묶여 있는 것이나 마찬가지이니, 더 오래 빌려줄수록 그 시간에 대한 대가를 더 요구하는 것이죠.
            <br />
            그리고 채권의 이자는 내 돈을 떼먹힐 가능성이 높다고 판단될수록 높아지기도 해요. 당연히 1년 뒤의 상황을
            예측하는 것보다는 10년 뒤의 상황을 예측하는 것이 더 어려울테니, 돈을 오래 빌려줄수록 이자가 높은 것이
            당연하겠죠?
            <br />
            <br />
            하지만 경제 상황이 좋지 않다면 이야기는 달라져요. 당장 현재의 경제 상황이 좋지 않은 상황이라면, 시장에
            참여한 사람들은 지금 돈을 빌려주면 원금조차 회수하지 못 할 가능성이 높다고 생각하게 돼요.
            <br />
            <br />
            그러면 사람들은 자연스럽게 이런 리스크를 방어하기 위해 1년, 2년 정도의 짧은 기간의 채권의 이자를 더 많이
            달라고 요구하게됩니다.
            <br />
            경제 상황이 더 안 좋아질수록 이런 심리는 더 가속화되고, 결국은 돈을 오래 빌려주는 것보다 짧게 빌려주는
            채권의 금리가 더 높아지는 이상한 현상이 발생하기까지 해요.
            <br />
            <br />
            <strong>이런 현상을 장단기 금리역전 이라고 해요.</strong>
            <br />
            <br />
            위의 1년물/10년 금리차는 미국의 국채 중 10년 동안 돈을 빌려주는 채권의 금리에서 1년 동안 돈을 빌려주는
            채권의 금리를 뺀 수치에요.
            <br />
            즉, 위 숫자가{' '}
            <strong
              className={css`
                color: ${colors.blue[5]};
              `}
            >
              0보다 작다면 현재 경제가 좋지 않은 상황
            </strong>
            이고,{' '}
            <strong
              className={css`
                color: ${colors.red[5]};
              `}
            >
              0보다 높다면 정상적인 상황
            </strong>
            이라고 볼 수 있어요.
          </Txt>
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default HomePage;
