import { Fragment, memo } from 'react';

interface Props {
  container?: React.ComponentType<any>;
}

const logoPath = '/favicon.ico';
const title = '내 연봉, 실수령액 알아보기';
const description = '내 연봉, 실수령액은 얼마일까? 국세청 통계를 기반으로 정확하게 알아보자!';
const author = 'Double Tap';

const siteData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://salary.double-tap.io',
  mainEntityOfPage: 'https://salary.double-tap.io',
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

function CommonHead({ container: Container = Fragment }: Props) {
  return (
    <Container>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="author" content={author} />
      <link rel="shortcut icon" href={logoPath} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/image/jumbotron.png" />
      <link rel="icon" type="image/png" sizes="16x16" href={logoPath} />
      <link rel="icon" type="image/png" sizes="32x32" href={logoPath} />
      <link rel="icon" type="image/png" sizes="48x48" href={logoPath} />
      <link rel="icon" type="image/png" sizes="196x196" href={logoPath} />
      <link rel="apple-touch-icon" sizes="57x57" href={logoPath} />
      <link rel="apple-touch-icon" sizes="72x72" href={logoPath} />
      <link rel="apple-touch-icon" sizes="114x114" href={logoPath} />
      <link rel="apple-touch-icon" sizes="120x120" href={logoPath} />
      <link rel="apple-touch-icon" sizes="144x144" href={logoPath} />
      <link rel="apple-touch-icon" sizes="152x152" href={logoPath} />
      <meta name="msapplication-TileImage" content={logoPath} />
      <meta name="google-site-verification" content="MLGj_VaV04VWUEkIcsb1Ov-tYu9bcp2TBakfflmc4DA" />
      <script type="application/ld+json">{JSON.stringify(siteData)}</script>
    </Container>
  );
}

export default memo(CommonHead);
