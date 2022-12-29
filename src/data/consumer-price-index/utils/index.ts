import { fetchHTML } from 'common/utils/html';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;
type ParsedHTMLElement = UnwrapPromise<ReturnType<typeof fetchHTML>>;

const getConsumerPriceIndexInfo = (html: ParsedHTMLElement) => {
  const table = html.getElementById('releaseInfo');
  const 물가지수표 = table?.getElementsByTagName('span');

  const 발표일 = 물가지수표[0]?.getElementsByTagName('div')[0].text;
  const 실제값 = 물가지수표[1]?.getElementsByTagName('div')[0].text;
  const 예측값 = 물가지수표[2]?.getElementsByTagName('div')[0].text;
  const 이전값 = 물가지수표[3]?.getElementsByTagName('div')[0].text;

  return {
    previous: 이전값,
    prediction: 예측값,
    real: 실제값,
    announceDate: 발표일,
  };
};

const getArticleContents = (html: ParsedHTMLElement) => {
  const newsDiv = html.getElementById('eventTabDiv_news_0');
  const 뉴스기사들 = newsDiv?.getElementsByTagName('article');

  const 첫번째뉴스기사제목 = 뉴스기사들[0]?.getElementsByTagName('a')[1].text;
  const 첫번째뉴스기사요약 = 뉴스기사들[0]?.getElementsByTagName('p')[0].text;
  const 첫번째뉴스기사이미지 = 뉴스기사들[0]?.getElementsByTagName('img')[0].getAttribute('data-src');
  const 첫번째뉴스기사링크 =
    'https://kr.investing.com' + 뉴스기사들[0]?.getElementsByTagName('a')[0].getAttribute('href');

  const 두번째뉴스기사제목 = 뉴스기사들[1]?.getElementsByTagName('a')[1].text;
  const 두번째뉴스기사요약 = 뉴스기사들[1]?.getElementsByTagName('p')[0].text;
  const 두번째뉴스기사이미지 = 뉴스기사들[1]?.getElementsByTagName('img')[0].getAttribute('data-src');
  const 두번째뉴스기사링크 =
    'https://kr.investing.com' + 뉴스기사들[1]?.getElementsByTagName('a')[0].getAttribute('href');

  const 반환값 = {
    first: {
      title: 첫번째뉴스기사제목,
      imageUrl: 첫번째뉴스기사이미지,
      content: 첫번째뉴스기사요약,
      link: 첫번째뉴스기사링크,
    },
    second: {
      title: 두번째뉴스기사제목,
      imageUrl: 두번째뉴스기사이미지,
      content: 두번째뉴스기사요약,
      link: 두번째뉴스기사링크,
    },
  };
  return 반환값;
};

export const getConsumerPriceIndex = async () => {
  const koreaCPIHTML = await fetchHTML('https://kr.investing.com/economic-calendar/south-korean-cpi-744');
  const koreaCPIMoM = getConsumerPriceIndexInfo(koreaCPIHTML);

  const usaCPIHTML = await fetchHTML('https://kr.investing.com/economic-calendar/cpi-69');
  const usaCPIMoM = getConsumerPriceIndexInfo(usaCPIHTML);

  return {
    korea: koreaCPIMoM,
    usa: usaCPIMoM,
  };
};

export const getTopTwoArticle = async () => {
  const koreaCPIHTML = await fetchHTML('https://kr.investing.com/economic-calendar/south-korean-cpi-744');
  const koreaArticle = getArticleContents(koreaCPIHTML);

  const usaCPIHTML = await fetchHTML('https://kr.investing.com/economic-calendar/cpi-69');
  const usaArticle = getArticleContents(usaCPIHTML);

  return {
    korea: koreaArticle,
    usa: usaArticle,
  };
};
