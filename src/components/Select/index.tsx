import colors from 'open-color';
import { css, cx } from '@emotion/css';
import { useMobileScreen } from 'hooks/useMobileScreen';
import { HTMLProps } from 'react';

type Props = Omit<HTMLProps<HTMLSelectElement>, 'ref'>;
const Select = ({ className, ...props }: Props) => {
  const isMobile = useMobileScreen();

  const height = isMobile ? 48 : 64;

  return (
    <select
      className={cx(
        css`
          height: ${height}px;
          border: none;
          background: ${colors.indigo[7]};
          color: ${colors.white};
          border-radius: ${isMobile ? 12 : 20}px;
          padding: ${isMobile ? '8px 40px 8px 16px' : '16px 40px 16px 24px'};
          font-size: ${isMobile ? 20 : 24}px;
          outline: 0;
          appearance: none;

          background-image: linear-gradient(45deg, transparent 60%, ${colors.white} 60%),
            linear-gradient(135deg, ${colors.white} 50%, transparent 50%);
          background-position: calc(100% - 20px) ${height / 2}px, calc(100% - 15px) ${height / 2}px;
          background-size: 10px 5px, 5px 5px, 1px 1.5em;
          background-repeat: no-repeat;
        `,
        className
      )}
      {...props}
    />
  );
};

export default Select;
