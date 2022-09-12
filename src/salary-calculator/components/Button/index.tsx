import colors from 'open-color';
import { css, cx } from '@emotion/css';
import { useMobileScreen } from 'hooks/useMobileScreen';
import { HTMLProps } from 'react';

type Props = Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'type'>;

const Button = ({ className, ...props }: Props) => {
  const isMobile = useMobileScreen();

  return (
    <button
      className={cx(
        css`
          width: ${isMobile ? 156 : 163}px;
          height: ${isMobile ? 56 : 80}px;
          border: none;
          border-radius: ${isMobile ? 16 : 20}px;
          background-color: ${colors.indigo[7]};
          color: ${colors.white};
          font-size: ${isMobile ? 20 : 24}px;
          line-height: ${isMobile ? 24 : 32}px;
          cursor: pointer;
          transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:active {
            transform: scale(0.95);
          }
        `,
        className
      )}
      {...props}
    />
  );
};

export default Button;
