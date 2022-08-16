import { css } from '@emotion/css';
import type { AppProps } from 'next/app';
import 'reset-css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={css`
        * {
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
            'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', sans-serif;
        }
        background-color: #1e1e1e;
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default App;
