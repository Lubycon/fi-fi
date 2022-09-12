import { css } from '@emotion/css';
import { useMobileScreen } from 'salary-calculator/hooks/useMobileScreen';
import { Txt } from 'quantumic-design';
import colors from 'open-color';

const Header = () => {
  const isMobile = useMobileScreen();
  return (
    <Txt
      className={css`
        position: absolute;
        top: 40px;
        left: ${isMobile ? '24px' : '40px'};
        white-space: nowrap;
      `}
      size={16}
      color={colors.gray[7]}
    >
      내 연봉,{' '}
      <Txt display="inline" as="span" weight={700} color={colors.indigo[6]}>
        실수령액
      </Txt>{' '}
      알아보기
    </Txt>
  );
};

export default Header;
