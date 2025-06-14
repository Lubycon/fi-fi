'use client';
import ServiceHead from 'data/currencies/components/ServiceHead';
import Layout from 'common/components/Layout';
import InvestingCurrency from './InvestingCurrency';
import { Flex, Spacing } from 'quantumic-design';
import { CurrencyTicker } from 'data/currencies/models';
import { currencyName } from 'data/currencies/constants';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { usePageLogger } from 'common/hooks/useLogger';

interface Props {
  ticker: CurrencyTicker;
}
const HomePage = ({ ticker }: Props) => {
  const logger = usePageLogger('data/currency/home_page', {
    ticker,
  });
  const isMobile = useMobileScreen();

  return (
    <Layout pageTitle={`실시간 ${currencyName[ticker] ?? ticker} 환율`}>
      <ServiceHead currency={ticker} />
      <Spacing size={isMobile ? 24 : 48} />
      <Flex justify="center">
        <InvestingCurrency ticker={ticker} />
      </Flex>
      {ticker === 'usd-krw' && (
        <>
          <Spacing size={isMobile ? 48 : 18} />
          <Flex justify="center">
            <Link
              href="/korea-usa-interest-rate"
              onClick={() => {
                logger.click('click_kore_usa_interest_rate_link');
              }}
            >
              <Button primary>한미 기준금리차 확인하기</Button>
            </Link>
          </Flex>
        </>
      )}
      <Spacing size={isMobile ? 48 : 62} />
      <InvestingCurrency.Copyrights />
    </Layout>
  );
};

export default HomePage;
