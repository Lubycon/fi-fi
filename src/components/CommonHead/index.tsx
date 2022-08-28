import { Fragment, memo } from 'react';

interface Props {
  container?: React.ComponentType<any>;
}

const logoPath = '/favicon.ico';
function CommonHead({ container: Container = Fragment }: Props) {
  return (
    <Container>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
      />
      <title>연봉 계산기</title>
      <meta name="author" content="Double Tap" />
      <link rel="shortcut icon" href={logoPath} />
      <meta property="og:title" content="연봉계산기" />
      <meta property="og:description" content="연봉계산기" />
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
    </Container>
  );
}

export default memo(CommonHead);
