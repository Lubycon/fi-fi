'use client';
import { useMemo } from 'react';
import { Button, Card } from 'semantic-ui-react';
import ServiceHead from 'data/korea-usa-interest-rate/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useQuery } from 'react-query';
import { doGet } from 'browser-toolkit';
import { Spacing, Stack, Txt } from 'quantumic-design';
import { InterestRateInfoDto } from 'data/korea-usa-interest-rate/models';
import CountryInterestRate from './CountryInterestRate';
import Link from 'next/link';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { usePageLogger } from 'common/hooks/useLogger';

const HomePage = () => {
  const logger = usePageLogger('data/korea-usa-interest-rate/home_page');
  const isMobile = useMobileScreen();
  const { data } = useQuery('interestRate', async () => (await doGet<InterestRateInfoDto>('/api/interest-rate')).body);

  const 금리차 = useMemo(() => {
    if (data == null) {
      return 0;
    }

    const { korea, usa } = data;
    const 한국금리 = Number(korea.rate.replaceAll('%', ''));
    const 미국금리 = Number(usa.rate.replaceAll('%', ''));

    return Math.abs(한국금리 - 미국금리);
  }, [data]);

  return (
    <Layout pageTitle="실시간 한미 기준금리차 보기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Spacing size={24} />
          <Stack gutter={48} direction={isMobile ? 'column' : 'row'} justify="center" align="center">
            <CountryInterestRate
              title="🇰🇷 대한민국 현재 기준금리"
              rate={data?.korea.rate}
              nextDecision={data?.korea.nextDecision}
            />
            <Stack gutter={8} direction="column" align="center">
              <Txt size={24} weight={700}>
                한미 기준금리차
              </Txt>
              <Txt size={48} weight={700}>
                {금리차.toFixed(2)}%
              </Txt>
            </Stack>
            <CountryInterestRate
              title="🇺🇸 미국 현재 기준금리"
              rate={data?.usa.rate}
              nextDecision={data?.usa.nextDecision}
            />
          </Stack>
          <Spacing size={24} />
          <Txt className="poweredBy" align="right">
            제공자{' '}
            <a
              href="https://kr.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Investing.com
            </a>
          </Txt>
        </Card.Content>
      </Card>
      <Txt as="h3">한미 기준 금리차가 왜 중요한가요?</Txt>
      <Txt as="p">
        금리란 돈을 빌려주거나, 혹은 빌려 쓴 데 대해 주고받는 대가를 말해요. 기준금리는 말 그대로 기준이 되는 금리인데,
        중앙은행과 은행간 거래에 적용되죠.
        <br />
        기준금리는 기업이나 개인이 은행에서 돈을 빌리거나 맡길 때 적용하는 시중금리에도 영향을 끼치기 때문에, 중앙은행의
        기준금리 결정은 우리의 삶에 큰 영향을 끼쳐요.
        <br />
        <br />
        만약 대한민국의 기준 금리가 미국보다 낮다면, 우리나라의 은행에 돈을 맡기는 것보다 미국의 은행에 돈을 맡기는 것이
        더 이자를 많이 받을 수 있다는 뜻이고,
        <br />
        반대로 대한민국의 기준금리가 미국의 기준금리보다 높다면 미국의 은행에 돈을 맡기는 것 보다 우리나라의 은행에 돈을
        맡기는 것이 유리하다는 의미에요.
        <br />
        <br />
        미국의 기준금리가 우리나라의 기준금리보다 많이 높아진다면, 기업이나 사람들은 원화를 팔아서 달러를 사고, 이
        달러를 들고 미국의 은행에 돈을 맡기겠죠?
        <br />
        <br />
        점점 더 많은 사람들이 원화를 시장에 팔아서 달러를 사면 살 수록, 원화는 시장에 점점 더 많이 공급되어 원화의
        가치는 떨어지고, 반대로 달러는 점점 줄어들어 가치가 높아져요.
        <br />
        <br />
        <strong>
          결론적으로 미국의 기준금리가 우리나라의 기준금리보다 많이 높다면 원/달러 환율이 높아진다는 의미에요.
        </strong>
        <br />
        <br />
        그럼 이제 현재 원/달러 환율을 확인하러 가볼까요?
      </Txt>
      <Spacing size={12} />
      <Link
        href="/currencies/usd-krw"
        onClick={() => {
          logger.click('click_currency_krw_usd_link');
        }}
      >
        <Button primary>실시간 원/달러 환율 확인하기</Button>
      </Link>
    </Layout>
  );
};

export default HomePage;
