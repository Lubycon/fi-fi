import { css } from '@emotion/css';
import Layout from 'common/components/Layout';
import { Stack } from 'quantumic-design';
import Category from './Category';

const MainPage = () => {
  return (
    <Layout>
      <Stack
        gutter={16}
        direction="column"
        className={css`
          width: 100%;
        `}
      >
        <Category
          title="실생활 계산기"
          links={[
            { name: '연봉 계산기', link: '/salary-calculator' },
            { name: '성장률 계산기', link: '/korean-area' },
            { name: '복리 계산기', link: '/compound-interest' },
          ]}
        />
        <Category title="단위 계산기" links={[{ name: '평수 계산기', link: '/growth-rate' }]} />
      </Stack>
    </Layout>
  );
};

export default MainPage;
