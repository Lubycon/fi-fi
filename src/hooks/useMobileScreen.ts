import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useMobileScreen() {
  const [mobile, setMobile] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobile(isMobile);
    }
  }, [isMobile]);

  return mobile;
}
