import { useEffect } from 'react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/usd-krw-currency/components/ServiceHead';
import Layout from 'common/components/Layout';
import InvestingCurrency from './InvestingCurrency';
import { Flex, Spacing } from 'quantumic-design';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'usd-krw-currency/pages/HomePage';
 * ```
 */
const HomePage = () => {
  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/usd-krw-currency/home_page');
    homePageLogger.view();
  }, []);
  return (
    <Layout pageTitle="원달러 환율">
      <ServiceHead />
      <Spacing size={48} />
      <Flex justify="center">
        <InvestingCurrency />
      </Flex>
      <Spacing size={62} />
      <InvestingCurrency.Copyrights />
    </Layout>
  );
};

export default HomePage;
