import Head from 'next/head';
import { memo } from 'react';
import serviceJson from 'salary-calculator/service.json';

const { title, description, author, favicon, logo } = serviceJson;

const siteData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://util-box.double-tap.io/salary-calculator',
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
      <link rel="shortcut icon" href={favicon} />
      <meta property="og:title" content={title} key="og:title" />
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
      <script id="metadata" type="application/ld+json">
        {JSON.stringify(siteData)}
      </script>
    </Head>
  );
}

export default memo(ServiceHead);
