import { css } from '@emotion/css';
import Layout from 'common/components/Layout';
import { Stack } from 'quantumic-design';
import Category from './Category';
import { useEffect } from 'react';
import { logger } from '@lubycon/logger';
import { currencyName } from 'data/currencies/constants';

const currencyPages = Object.entries(currencyName).map(([ticker, name]) => {
  return {
    name: `${name} 환율`,
    link: `/currencies/${ticker}`,
  };
});

const MainPage = () => {
  useEffect(() => {
    const mainPageLogger = logger.getPageLogger('main_page');
    mainPageLogger.view();
  }, []);

  return (
    <Layout>
      <Stack
        gutter={32}
        direction="column"
        className={css`
          width: 100%;
        `}
      >
        <Category
          title="실생활 계산기"
          links={[
            { name: '연봉 계산기', link: '/salary-calculator' },
            { name: '성장률 계산기', link: '/growth-rate' },
            { name: '복리 계산기', link: '/compound-interest' },
          ]}
        />
        <Category title="단위 계산기" links={[{ name: '평수 계산기', link: '/korean-area' }]} />
        <Category title="실시간 환율" links={currencyPages} />
        <Category
          title="금융 정보"
          links={[
            {
              name: '실시간 한미 금리차',
              link: '/korea-usa-interest-rate',
            },
          ]}
        />
      </Stack>
    </Layout>
  );
};

export default MainPage;
