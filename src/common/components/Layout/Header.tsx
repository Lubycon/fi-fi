'use client';
import Link from 'next/link';
import { Flex, Txt } from 'quantumic-design';
import colors from 'open-color';
import { css } from '@emotion/css';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

const Header = () => {
  const isMobile = useMobileScreen();

  return (
    <Flex
      as="header"
      className={css`
        padding: 16px;
        border-bottom: 1px solid ${colors.gray[2]};
      `}
    >
      <Link
        href="/"
        className={css`
          cursor: pointer;
        `}
      >
        <Txt size={isMobile ? 18 : 24} weight={700} color={colors.black}>
          Fi-Fi
        </Txt>
      </Link>
    </Flex>
  );
};

export default Header;
