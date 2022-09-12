import { css } from '@emotion/css';
import { logger } from '@lubycon/logger';
import { useBooleanState, useQueryParam } from '@lubycon/react';
import Button from 'salary-calculator/components/Button';
import CopyRights from 'salary-calculator/components/CopyRights';
import Header from 'salary-calculator/components/Header';
import LoadingSpinner from 'common/components/LoadingSpinner';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import Image from 'next/image';
import Link from 'next/link';
import colors from 'open-color';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { useEffect, useState } from 'react';
import IncomeRangeResult from './IncomeRangeResult';
import SalaryResult from './SalaryResult';

const resultPageLogger = logger.getPageLogger('Salary Calculator ResultPage');

const ResultPage = () => {
  const isMobile = useMobileScreen();
  const 세전연봉 = useQueryParam('salary', Number);

  const [loading, , endLoading] = useBooleanState(true);
  const [loadingMessage, setLoadingMessage] = useState('소득세를 계산 중이에요...');

  useEffect(() => {
    resultPageLogger.view();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      endLoading();
      resultPageLogger.impression('end_fake_loading');
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [endLoading]);

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

  const isLoading = 세전연봉 == null || loading === true;

  return (
    <>
      {isLoading === true ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          className={css`
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 3000;
            background-color: #1e1e1e;
          `}
        >
          <LoadingSpinner color={colors.white} size={24} />
          <Spacing size={16} />
          <Txt color={colors.white}>{loadingMessage}</Txt>
        </Flex>
      ) : null}
      <Flex
        justify={isMobile ? undefined : 'center'}
        align="center"
        className={css`
          height: 100vh;
          padding: 0 24px;
        `}
      >
        <Header />
        <Flex
          direction="column"
          className={css`
            width: ${isMobile ? '100%' : 'auto'};
            z-index: 10;
          `}
        >
          {isLoading === false && <SalaryResult 세전연봉={세전연봉!} />}
          <Spacing size={10} />
          <Txt color={colors.gray[8]}>※국세청 간이세액표 기준</Txt>
          <Spacing size={30} />
          <Stack gutter={16} align={isMobile ? undefined : 'center'} direction={isMobile ? 'column' : 'row'}>
            {isLoading === false && <IncomeRangeResult 세전연봉={세전연봉!} />}
          </Stack>
          <Spacing size={5} />
          <Txt color={colors.gray[8]}>※국세청_근로소득 백분위(천분위) 자료</Txt>
          <Spacing size={70} />
          <Flex
            justify={isMobile ? 'center' : 'flex-end'}
            className={css`
              width: 100%;
            `}
          >
            <Link href="/">
              <a
                className={css`
                  display: block;
                `}
              >
                <Button
                  className={css`
                    border: 2px solid ${colors.indigo[7]};
                    background-color: transparent;
                    color: ${colors.indigo[7]};
                  `}
                  onClick={() => {
                    resultPageLogger.click('click_move_to_home_page');
                  }}
                >
                  다시하기
                </Button>
              </a>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <div
        className={css`
          position: absolute;
          bottom: 0;
          right: ${isMobile ? '-40px' : '15vw'};
        `}
      >
        <Image layout="fixed" width={306} height={306} src="/cash.png" priority={true} alt="" />
      </div>
      <CopyRights />
    </>
  );
};

export default ResultPage;
