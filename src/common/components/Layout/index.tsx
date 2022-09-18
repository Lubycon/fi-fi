import { css } from '@emotion/css';
import { Flex, Spacing, Txt } from 'quantumic-design';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

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
        className={css`
          padding: 0 24px;
        `}
      >
        {pageTitle && (
          <>
            <Txt as="h1">{pageTitle}</Txt>
            <Spacing size={16} />
          </>
        )}
        {children}
      </Flex>
      <Spacing size={24} />
      <Footer />
    </div>
  );
};

export default Layout;
