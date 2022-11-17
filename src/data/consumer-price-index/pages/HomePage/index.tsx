import { useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/consumer-price-index/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useQuery } from 'react-query';
import { doGet } from 'browser-toolkit';
import { Spacing, Stack, Txt } from 'quantumic-design';
import { ConsumerPriceIndexInfoDto } from 'data/consumer-price-index/models';
import CountryCustomerPriceIndex from './CountryCustomerPriceIndex';
import Link from 'next/link';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'consumer-price-index/pages/HomePage';
 * ```
 */
const HomePage = () => {
  const isMobile = useMobileScreen();
  const { data } = useQuery(
    'ConsumerPriceIndex',
    async () => (await doGet<ConsumerPriceIndexInfoDto>('/api/consumer-price-index')).body
  );

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/consumer-price-index/home_page');
    homePageLogger.view();
  }, []);

  return (
    <Layout pageTitle="실시간 한미 소비자물가지수(CPI) 보기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Spacing size={24} />
          <Stack gutter={48} direction={isMobile ? 'column' : 'row'} justify="center" align="center">
            <CountryCustomerPriceIndex
              title="🇰🇷 대한민국 현재 소비자물가지수"
              previous={data?.korea.previous}
              real={data?.korea.real}
              prediction={data?.korea.prediction}
              announceDate={data?.korea.announceDate}
            />
            <Spacing size={24} />
            <CountryCustomerPriceIndex
              title="🇺🇸 미국 현재 소비자물가지수"
              previous={data?.usa.previous}
              real={data?.usa.real}
              prediction={data?.usa.prediction}
              announceDate={data?.usa.announceDate}
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
      <Txt as="h3">소비자물가지수(CPI)가 왜 중요한가요?</Txt>
      <Txt as="p">
        설명설명~
        <br />
        설명설명~
        <br />
        <br />
        설명설명~
        <br />
        설명설명~
        <br />
        <br />
        설명설명~
        <br />
        <br />
        설명설명~
        <br />
        <br />
        <strong>설명설명~</strong>
        <br />
        <br />
        설명설명~
      </Txt>
      <Spacing size={12} />
      <Link href="">
        <a>
          <Button primary>소비자물가지수 뉴스 IFrame 추가</Button>
        </a>
      </Link>
    </Layout>
  );
};

export default HomePage;
