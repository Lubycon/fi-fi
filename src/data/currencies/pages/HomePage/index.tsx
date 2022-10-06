import { useEffect } from 'react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/currencies/components/ServiceHead';
import Layout from 'common/components/Layout';
import InvestingCurrency from './InvestingCurrency';
import { Flex, Spacing } from 'quantumic-design';
import { CurrencyTicker } from 'data/currencies/models';
import { currencyName } from 'data/currencies/constants';

interface Props {
  ticker: CurrencyTicker;
}
const HomePage = ({ ticker }: Props) => {
  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/currency/home_page');
    homePageLogger.view({ currency: ticker });
  }, [ticker]);

  return (
    <Layout pageTitle={`실시간 ${currencyName[ticker] ?? ticker} 환율`}>
      <ServiceHead currency={ticker} />
      <Spacing size={48} />
      <Flex justify="center">
        <InvestingCurrency ticker={ticker} />
      </Flex>
      <Spacing size={62} />
      <InvestingCurrency.Copyrights />
    </Layout>
  );
};

export default HomePage;
