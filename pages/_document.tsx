import CommonHead from 'components/CommonHead';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { cache } from '@emotion/css';

const renderStatic = async (html: string) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </>
      ),
    };
  }

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
