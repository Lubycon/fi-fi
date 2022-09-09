import { Flex, Spacing, Txt } from 'quantumic-design';
import { commaizeNumber } from 'temen';
import colors from 'open-color';
import { getMonthlySalary } from 'utils/salary';
import { useMemo } from 'react';
import { useMobileScreen } from 'hooks/useMobileScreen';
import { css } from '@emotion/css';
import { RollingNumber } from '@lubycon/rolling-number';

interface Props {
  세전연봉: number;
}
const SalaryResult = ({ 세전연봉 }: Props) => {
  const isMobile = useMobileScreen();
  const mainTextSize = isMobile ? 40 : 64;
  const mainLineHeight = isMobile ? 48 : 76.38;

  const 실수령액 = useMemo(() => getMonthlySalary(세전연봉 ?? 0), [세전연봉]);

  return (
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
  );
};

export default SalaryResult;
