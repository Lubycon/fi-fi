import { css } from '@emotion/css';
import Link from 'next/link';
import { Stack, Txt } from 'quantumic-design';
import { commaizeNumber, stringifyQueryParams } from 'temen';
import colors from 'open-color';

interface Props {
  shortcutSalaries: number[];
  onClick?: (salary: number) => void;
}
const Shortcuts = ({ shortcutSalaries, onClick }: Props) => {
  return (
    <Stack
      direction="column"
      gutter={16}
      className={css`
        padding: 16px;
        background-color: ${colors.gray[9]};
        border-radius: 8px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      `}
    >
      <Txt color={colors.white} weight={700}>
        다른 사람 연봉도 알아보기
      </Txt>
      <Stack direction="column" gutter={16} as="ul">
        {shortcutSalaries.map(salary => {
          const querystring = stringifyQueryParams({
            salary,
          });
          return (
            <li key={salary}>
              <Link href={`/result${querystring}`}>
                <Txt
                  as="a"
                  size={14}
                  onClick={() => onClick?.(salary)}
                  className={css`
                    color: ${colors.white};
                    text-decoration: none;
                    transition: opacity 0.2s ease-in-out;
                    cursor: pointer;
                    &:hover {
                      opacity: 0.8;
                    }
                  `}
                >
                  연봉 {commaizeNumber(salary)} &gt;
                </Txt>
              </Link>
            </li>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Shortcuts;
