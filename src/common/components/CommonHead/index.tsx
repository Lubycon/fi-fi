import Head from 'next/head';
import { memo } from 'react';

const favicon = '/favicon.ico';
const logo = {
  x: '/favicon1x.png',
  xx: '/favicon2x.png',
  xxx: '/favicon4x.png',
};

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
      <meta name="author" content={author} />
      <link rel="shortcut icon" href={favicon} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og_image.png" />
      <link rel="icon" type="image/png" sizes="16x16" href={logo.x} />
      <link rel="icon" type="image/png" sizes="32x32" href={logo.xx} />
      <link rel="icon" type="image/png" sizes="48x48" href={logo.xxx} />
      <link rel="icon" type="image/png" sizes="196x196" href={logo.xxx} />
      <link rel="apple-touch-icon" sizes="57x57" href={logo.x} />
      <link rel="apple-touch-icon" sizes="72x72" href={logo.xx} />
      <link rel="apple-touch-icon" sizes="114x114" href={logo.xxx} />
      <link rel="apple-touch-icon" sizes="120x120" href={logo.xxx} />
      <link rel="apple-touch-icon" sizes="144x144" href={logo.xxx} />
      <link rel="apple-touch-icon" sizes="152x152" href={logo.xxx} />
      <meta name="msapplication-TileImage" content={logo.xx} />
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
