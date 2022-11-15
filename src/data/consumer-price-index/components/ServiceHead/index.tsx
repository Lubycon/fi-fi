import Head from 'next/head';
import { memo } from 'react';
import serviceJson from 'data/consumer-price-index/service.json';

const { title, description, author, favicon, logo } = serviceJson;

const siteData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://util-box.double-tap.io/consumer-price-index',
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

function ServiceHead() {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href={favicon} key="favicon" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content="/og_image.png" key="og:image" />
      <link rel="icon" type="image/png" sizes="16x16" href={logo.x} key="icon16" />
      <link rel="icon" type="image/png" sizes="32x32" href={logo.xx} key="icon32" />
      <link rel="icon" type="image/png" sizes="48x48" href={logo.xxx} key="icon48" />
      <link rel="icon" type="image/png" sizes="196x196" href={logo.xxx} key="icon196" />
      <link rel="apple-touch-icon" sizes="57x57" href={logo.x} key="appleIcon57" />
      <link rel="apple-touch-icon" sizes="72x72" href={logo.xx} key="appleIcon72" />
      <link rel="apple-touch-icon" sizes="114x114" href={logo.xxx} key="appleIcon114" />
      <link rel="apple-touch-icon" sizes="120x120" href={logo.xxx} key="appleIcon120" />
      <link rel="apple-touch-icon" sizes="144x144" href={logo.xxx} key="appleIcon144" />
      <link rel="apple-touch-icon" sizes="152x152" href={logo.xxx} key="appleIcon152" />
      <meta name="msapplication-TileImage" content={logo.xx} key="msTileImage" />
      <script id="metadata" type="application/ld+json">
        {JSON.stringify(siteData)}
      </script>
    </Head>
  );
}

export default memo(ServiceHead);
