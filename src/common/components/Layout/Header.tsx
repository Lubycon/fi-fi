import Link from 'next/link';
import { Flex, Txt } from 'quantumic-design';
import colors from 'open-color';
import { css } from '@emotion/css';

const Header = () => {
  return (
    <Flex
      as="header"
      className={css`
        padding: 16px;
        border-bottom: 1px solid ${colors.gray[2]};
      `}
    >
      <Link href="/">
        <Txt
          as="a"
          size={24}
          weight={700}
          color={colors.black}
          className={css`
            cursor: pointer;
          `}
        >
          더블탭 유틸박스
        </Txt>
      </Link>
    </Flex>
  );
};

export default Header;
