import { css } from '@emotion/css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import colors from 'open-color';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { useState } from 'react';
import { commaizeNumber, stringifyQueryParams } from 'temen';

const HomePage = () => {
  const [salary, setSalary] = useState<string>();
  const router = useRouter();

  return (
    <Flex
      justify="center"
      align="center"
      className={css`
        height: 100vh;
      `}
    >
      <Flex direction="column">
        <Stack direction="column" gutter={32}>
          <Txt color={colors.white} size={64} lineHeight="76px" weight={700}>
            내 연봉,
          </Txt>
          <Stack gutter={20} align="center">
            <input
              type="tel"
              className={css`
                background-color: ${colors.gray[9]};
                border: none;
                width: 428px;
                height: 96px;
                border-radius: 20px;
                font-size: 64px;
                line-height: 76px;
                color: ${colors.white};
                font-weight: 700;
                padding: 8px 16px;
                box-sizing: border-box;
                text-align: right;
                outline: 0;
                &::placeholder {
                  color: ${colors.gray[6]};
                }
              `}
              placeholder="0"
              value={salary}
              onChange={e => {
                const value = removeComma(e.target.value) ?? '';
                setSalary(commaizeNumber(value));
              }}
            />
            <Txt color={colors.white} size={64} lineHeight="76px" weight={700}>
              원 의
            </Txt>
          </Stack>
          <Txt color={colors.white} size={64} lineHeight="76px" weight={700}>
            월 실수령액이 얼마죠?
          </Txt>
        </Stack>
        <Spacing size={80} />
        <Flex
          justify="flex-end"
          className={css`
            width: 100%;
          `}
        >
          <button
            className={css`
              width: 163px;
              height: 80px;
              border: none;
              border-radius: 20px;
              background-color: ${colors.indigo[7]};
              color: ${colors.white};
              font-size: 24px;
              line-height: 32px;
              cursor: pointer;
              transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
              &:hover {
                opacity: 0.8;
              }
              &:active {
                transform: scale(0.95);
              }
            `}
            onClick={() => {
              const querystring = stringifyQueryParams({
                salary: removeComma(salary),
              });
              router.push(`/result${querystring}`);
            }}
          >
            계산하기
          </button>
        </Flex>
      </Flex>
      <div
        className={css`
          position: absolute;
          bottom: 0;
          right: 15vw;
        `}
      >
        <Image layout="fixed" width={306} height={306} src="/cash.png" />
      </div>
    </Flex>
  );
};

export default HomePage;

const removeComma = (value?: string) => (value == null ? value : value.replaceAll(',', ''));
