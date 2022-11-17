import { logger, LoggerEventParams } from '@lubycon/logger';
import { useEffect } from 'react';

export function useLogger(pageName: string) {
  return logger.getPageLogger(pageName);
}

export function usePageLogger(pageName: string, params?: LoggerEventParams) {
  const pageLogger = useLogger(pageName);

  useEffect(() => {
    pageLogger.view(params);
  }, [pageName, params]);

  return pageLogger;
}
