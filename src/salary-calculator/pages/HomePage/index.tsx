import { css } from '@emotion/css';
import { logger } from '@lubycon/logger';
import Button from 'salary-calculator/components/Button';
import { useMobileScreen } from 'salary-calculator/hooks/useMobileScreen';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Flex, Spacing } from 'quantumic-design';
import { useEffect, useState } from 'react';
import { stringifyQueryParams } from 'temen';
import Header from 'salary-calculator/components/Header';
import SalaryInput from './SalaryInput';
import CopyRights from 'salary-calculator/components/CopyRights';
import Shortcuts from 'salary-calculator/components/Shortcuts';

const homePageLogger = logger.getPageLogger('HomePage');

const HomePage = () => {
  const isMobile = useMobileScreen();
  const [salary, setSalary] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    homePageLogger.view();
  }, []);

  return (
    <>
      <Header />
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
          <SalaryInput onChange={setSalary} />
          <Spacing size={80} />
          <Flex
            justify={isMobile ? 'center' : 'flex-end'}
            className={css`
              width: 100%;
            `}
          >
            <Button
              onClick={() => {
                homePageLogger.click('click_calculate_salary');

                const querystring = stringifyQueryParams({
                  salary,
                });
                router.push(`/result${querystring}`);
              }}
            >
              계산하기
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {isMobile === false && (
        <div
          className={css`
            position: fixed;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
          `}
        >
          <Shortcuts
            shortcutSalaries={[32000000, 48200000, 53000000, 72000000, 98000000]}
            onClick={clickedSalary => {
              homePageLogger.click('click_shortcut_salary', {
                salary: clickedSalary,
              });
            }}
          />
        </div>
      )}
      <div
        className={css`
          position: absolute;
          bottom: 0;
          right: ${isMobile ? '-40px' : '15vw'};
          z-index: 0;
        `}
      >
        <Image layout="fixed" width={306} height={306} src="/cash.png" priority={true} alt="" />
      </div>
      <CopyRights />
    </>
  );
};

export default HomePage;
