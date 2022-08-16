import { css } from '@emotion/css';
import { useQueryParam } from '@lubycon/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import colors from 'open-color';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { commaizeNumber } from 'temen';

const ResultPage = () => {
  const router = useRouter();
  const salary = useQueryParam('salary', Number);

  if (salary == null) {
    return <>로딩 중</>;
  }

  return (
    <Flex
      justify="center"
      align="center"
      className={css`
        height: 100vh;
      `}
    >
      <Flex direction="column">
        <Flex direction="column">
          <Txt color={colors.gray[6]} size={18} lineHeight="21.48px" weight={500}>
            연봉 {commaizeNumber(salary)}원 기준으로
          </Txt>
          <Spacing size={20} />
          <Txt size={64} color={colors.white} lineHeight="76.38px" weight={700}>
            매달{' '}
            <Txt display="inline" color={colors.indigo[6]}>
              {commaizeNumber(123123)}원
            </Txt>
            을 받아요
          </Txt>
        </Flex>
        <Spacing size={48} />
        <Stack gutter={16} align="center">
          <Txt color={colors.white} size={24} weight={700} lineHeight="40px">
            내가 받는 연봉은
          </Txt>
          <button />
          <Txt color={colors.white} size={24} weight={700} lineHeight="40px">
            중에서 몇위일까?
          </Txt>
        </Stack>
        <Spacing size={80} />
        <Flex
          className={css`
            width: 100%;
          `}
        >
          <button
            className={css`
              width: 163px;
              height: 80px;
              border: 2px solid ${colors.indigo[7]};
              border-radius: 20px;
              background-color: transparent;
              color: ${colors.indigo[7]};
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
            onClick={() => router.push('/')}
          >
            다시하기
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

export default ResultPage;
