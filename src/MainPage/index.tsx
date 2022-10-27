import { css } from '@emotion/css';
import Layout from 'common/components/Layout';
import { Stack } from 'quantumic-design';
import Category from './Category';
import { useEffect } from 'react';
import { logger } from '@lubycon/logger';
import { pages } from 'common/constants/pages';

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
        {pages.map(({ category, links }) => (
          <Category key={category} title={category} links={links} />
        ))}
      </Stack>
    </Layout>
  );
};

export default MainPage;
