import { logger, LoggerEventParams } from '@lubycon/logger';
import { useEffect } from 'react';

export function usePageLogger(pageName: string, params?: LoggerEventParams) {
  const pageLogger = logger.getPageLogger(pageName);

  useEffect(() => {
    pageLogger.view(params);
  }, [pageName, params]);

  return pageLogger;
}
