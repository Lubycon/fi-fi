import { css } from '@emotion/css';
import { pages } from 'common/constants/pages';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import Link from 'next/link';
import colors from 'open-color';
import { Spacing, Stack, Txt } from 'quantumic-design';

const Aside = () => {
  const isMobile = useMobileScreen();

  return (
    <aside
      className={css`
        width: ${isMobile ? '100%' : '300px'};
        padding: 16px;
        background-color: ${colors.gray[0]};
        border-radius: 8px;
      `}
    >
      <Txt
        size={16}
        weight={700}
        className={css`
          margin: 0;
        `}
      >
        다른 메뉴 보러가기
      </Txt>
      <Spacing size={16} />
      <Stack direction="column" gutter={8}>
        {pages.map(({ category, links }) => (
          <div key={category}>
            <Txt
              weight={700}
              className={css`
                margin: 0;
              `}
            >
              {category}
            </Txt>
            <Spacing size={4} />
            <ul
              className={css`
                margin: 0;
                padding: 0;
              `}
            >
              {links.map(({ name, link }) => (
                <Link href={link} key={link}>
                  <a>
                    <li>{name}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </Stack>
    </aside>
  );
};

export default Aside;
