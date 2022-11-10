import { useEffect } from 'react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/currencies/components/ServiceHead';
import Layout from 'common/components/Layout';
import InvestingCurrency from './InvestingCurrency';
import { Flex, Spacing } from 'quantumic-design';
import { CurrencyTicker } from 'data/currencies/models';
import { currencyName } from 'data/currencies/constants';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

interface Props {
  ticker: CurrencyTicker;
}
const HomePage = ({ ticker }: Props) => {
  const isMobile = useMobileScreen();

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/currency/home_page');
    homePageLogger.view({ currency: ticker });
  }, [ticker]);

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
            <Link href="/korea-usa-interest-rate">
              <a>
                <Button primary>한미 기준금리차 확인하기</Button>
              </a>
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
