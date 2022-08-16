import CommonHead from 'components/CommonHead';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render() {
    return (
      <Html lang="ko">
        <Head>
          <CommonHead />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
