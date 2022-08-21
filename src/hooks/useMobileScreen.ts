import { useMediaQuery } from 'react-responsive';

export function useMobileScreen() {
  return useMediaQuery({
    query: '(max-width: 1200px)',
  });
}
