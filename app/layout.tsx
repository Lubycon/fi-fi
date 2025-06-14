'use client';
import { css } from '@emotion/css';
import { logger } from '@lubycon/logger';
import CommonHead from 'common/components/CommonHead';
import { isProduction } from 'common/constants/env';
import { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'reset-css';
import 'semantic-ui-css/semantic.min.css';
import EmotionRegistry from './registry';

const client = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    logger.init({
      services: {
        amplitude: {
          apiKey: '0513f1548056c9512dd39394a6240bcf',
        },
        firebase: {
          apiKey: 'AIzaSyC2YRoV7MqPXKBpbe9r91BrGIS0yYuJ2Yw',
          authDomain: 'salarycalculator-b7361.firebaseapp.com',
          projectId: 'salarycalculator-b7361',
          storageBucket: 'salarycalculator-b7361.appspot.com',
          messagingSenderId: '936302233887',
          appId: '1:936302233887:web:bdf068be130afb62f4482a',
          measurementId: 'G-MYEJTCFRN6',
        },
      },
      mode: isProduction ? 'production' : 'development',
    });
  }, []);

  return (
    <html lang="ko">
      <head />
      <body>
        <EmotionRegistry>
          <QueryClientProvider client={client}>
            <CommonHead />
            <div
              className={css`
                * {
                  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
                    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                }
              `}
            >
              {children}
            </div>
          </QueryClientProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
