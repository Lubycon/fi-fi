import Head from 'next/head';
import { memo } from 'react';

const title = '더블탭 유틸 박스';
const description = '더블탭 유틸박스 입니다';
const author = 'Double Tap';

const siteData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://util-box.double-tap.io',
  mainEntityOfPage: 'https://util-box.double-tap.io',
  description,
  author: {
    '@type': 'Organization',
    name: author,
  },
  creator: {
    '@type': 'Organization',
    name: author,
  },
};

function CommonHead() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="author" content={author} key="author" />
      <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content="/og_image.jpg" key="og:image" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
      <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-96x96.png" key="icon48" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" key="icon192" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" key="appleIcon57" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" key="appleIcon72" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" key="appleIcon114" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" key="appleIcon120" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" key="appleIcon144" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" key="appleIcon152" />
      <meta name="msapplication-TileImage" content="/ms-icon-310x310.png" key="msTileImage" />
      <meta name="google-site-verification" content="MLGj_VaV04VWUEkIcsb1Ov-tYu9bcp2TBakfflmc4DA" />
      <script id="metadata" type="application/ld+json">
        {JSON.stringify(siteData)}
      </script>
      <script
        id="google-adsense"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4113746985528013"
        crossOrigin="anonymous"
      />
    </Head>
  );
}

export default memo(CommonHead);
