import { css } from '@emotion/css';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

interface Props {
  pageTitle?: string;
  showAside?: boolean;
}
const Layout = ({ pageTitle, showAside = true, children }: PropsWithChildren<Props>) => {
  const isMobile = useMobileScreen();

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
          gutter={isMobile ? 50 : 16}
          direction={isMobile ? 'column' : 'row'}
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
          {showAside && <Aside />}
        </Stack>
      </Flex>
      <Spacing size={24} />
      <Footer />
    </div>
  );
};

export default Layout;
