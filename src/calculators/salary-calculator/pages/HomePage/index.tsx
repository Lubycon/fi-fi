import { css } from '@emotion/css';
import { logger } from '@lubycon/logger';
import Button from 'calculators/salary-calculator/components/Button';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { useRouter } from 'next/router';
import { Flex, Spacing } from 'quantumic-design';
import { useEffect, useState } from 'react';
import { stringifyQueryParams } from 'temen';
import SalaryInput from './SalaryInput';
import Shortcuts from 'calculators/salary-calculator/components/Shortcuts';
import ServiceHead from 'calculators/salary-calculator/components/ServiceHead';
import Layout from 'common/components/Layout';

const homePageLogger = logger.getPageLogger('Salary Calculator HomePage');

const HomePage = () => {
  const isMobile = useMobileScreen();
  const [salary, setSalary] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    homePageLogger.view();
  }, []);

  return (
    <Layout>
      <ServiceHead />
      <Flex justify={isMobile ? undefined : 'center'} align="center">
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
    </Layout>
  );
};

export default HomePage;
