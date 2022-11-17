import { css } from '@emotion/css';
import Layout from 'common/components/Layout';
import { Stack } from 'quantumic-design';
import Category from './Category';
import { pages } from 'common/constants/pages';
import { usePageLogger } from 'common/hooks/useLogger';

const MainPage = () => {
  usePageLogger('main_page');

  return (
    <Layout showAside={false}>
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
