import { keyframes } from '@emotion/react';
import colors from 'open-color';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface Props {
  size?: number;
  borderWidth?: number;
  color?: string;
}
const LoadingSpinner = ({ size = 20, borderWidth = 3, color = colors.gray[9] }: Props) => {
  const { red, green, blue } = hexToRgb(color);
  return (
    <div
      css={{
        display: 'inline-block',
        width: size,
        height: size,
        border: `${borderWidth}px solid rgba(${red}, ${green}, ${blue}, 0.3)`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: `${spinAnimation} 1s ease-in-out infinite`,
      }}
    />
  );
};

export function hexToRgb(hexString: string) {
  const hex = hexString.trim().replace('#', '');
  const [red, green, blue] =
    hex.match(/[a-fA-F\d]{2}/g)?.map(colorField => {
      return parseInt(colorField, 16);
    }) ?? [];

  return { red, green, blue };
}

export default LoadingSpinner;
