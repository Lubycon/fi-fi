import { css } from '@emotion/css';
import { useBooleanState, useQueryParam } from '@lubycon/react';
import { RollingNumber } from '@lubycon/rolling-number';
import Button from 'components/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import { useMobileScreen } from 'hooks/useMobileScreen';
import Image from 'next/image';
import { useRouter } from 'next/router';
import colors from 'open-color';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { useEffect, useMemo, useState } from 'react';
import { commaizeNumber } from 'temen';
import { calcIncomeRange, getMonthlySalary } from 'utils/salary';

const ResultPage = () => {
  const isMobile = useMobileScreen();

  const router = useRouter();
  const 세전연봉 = useQueryParam('salary', Number);
  const 실수령액 = useMemo(() => getMonthlySalary(세전연봉 ?? 0), [세전연봉]);
  const [loading, , endLoading] = useBooleanState(true);
  const [loadingMessage, setLoadingMessage] = useState('소득세를 계산 중이에요...');

  useEffect(() => {
    const timeout = setTimeout(() => {
      endLoading();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setLoadingMessage('4대 보험료를 계산 중이에요...');
    }, 1500);
    const timeout2 = setTimeout(() => {
      setLoadingMessage('거의 다 끝났어요...');
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  if (세전연봉 == null || loading === true) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        className={css`
          height: 100vh;
        `}
      >
        <LoadingSpinner color={colors.white} size={24} />
        <Spacing size={16} />
        <Txt color={colors.white}>{loadingMessage}</Txt>
      </Flex>
    );
  }

  const mainTextSize = isMobile ? 40 : 64;
  const mainLineHeight = isMobile ? 48 : 76.38;

  return (
    <Flex
      justify={isMobile ? undefined : 'center'}
      align="center"
      className={css`
        height: 100vh;
        padding: 0 24px;
      `}
    >
      <Flex
        direction="column"
        className={css`
          width: ${isMobile ? '100%' : 'auto'};
          z-index: 10;
        `}
      >
        <Flex direction="column">
          <Txt color={colors.gray[6]} size={18} lineHeight="21.48px" weight={500}>
            연봉 {commaizeNumber(세전연봉)}원 기준으로
          </Txt>
          <Spacing size={20} />
          <Flex
            align={isMobile ? undefined : 'center'}
            direction={isMobile ? 'column' : 'row'}
            className={css`
              width: 100%;
            `}
          >
            <Txt
              size={mainTextSize}
              color={colors.white}
              lineHeight={`${mainLineHeight}px`}
              weight={700}
              className={css`
                margin-right: 8px;
              `}
            >
              매달
            </Txt>
            <RollingNumber
              width={isMobile ? 26 : 38}
              height={mainTextSize}
              number={실수령액}
              formatter={value => (
                <Txt size={mainTextSize} lineHeight={`${mainLineHeight}px`} weight={700} color={colors.indigo[6]}>
                  {value}
                </Txt>
              )}
            />
            <Txt size={mainTextSize} color={colors.white} lineHeight={`${mainLineHeight}px`} weight={700}>
              원을 받아요
            </Txt>
          </Flex>
        </Flex>
        <Spacing size={48} />
        <Stack gutter={16} align={isMobile ? undefined : 'center'} direction={isMobile ? 'column' : 'row'}>
          <Txt color={colors.white} size={24} weight={700} lineHeight="40px">
            내가 받는 연봉은{' '}
            <Txt display="inline" color={colors.indigo[3]}>
              {calcIncomeRange(Number(세전연봉))}
            </Txt>{' '}
            에요.
          </Txt>
        </Stack>
        <Spacing size={80} />
        <Flex
          justify={isMobile ? 'center' : 'flex-end'}
          className={css`
            width: 100%;
          `}
        >
          <Button
            className={css`
              border: 2px solid ${colors.indigo[7]};
              background-color: transparent;
              color: ${colors.indigo[7]};
            `}
            onClick={() => router.push('/')}
          >
            다시하기
          </Button>
        </Flex>
      </Flex>
      <div
        className={css`
          position: absolute;
          bottom: 0;
          right: ${isMobile ? '-40px' : '15vw'};
        `}
      >
        <Image layout="fixed" width={306} height={306} src="/cash.png" priority={true} />
      </div>
    </Flex>
  );
};

export default ResultPage;
