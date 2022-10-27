import { css } from '@emotion/css';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

interface Props {
  pageTitle?: string;
}
const Layout = ({ pageTitle, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Header />
      <Spacing size={24} />
      <Flex
        as="main"
        direction="column"
        className={css`
          padding: 0 24px;
          width: 100%;
        `}
      >
        {pageTitle && (
          <>
            <Txt as="h1">{pageTitle}</Txt>
            <Spacing size={16} />
          </>
        )}
        <Stack
          gutter={16}
          align="stretch"
          className={css`
            width: 100%;
          `}
        >
          <div
            className={css`
              width: 100%;
            `}
          >
            {children}
          </div>
          <Aside />
        </Stack>
      </Flex>
      <Spacing size={24} />
      <Footer />
    </div>
  );
};

export default Layout;
