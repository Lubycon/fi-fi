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

const getArticleContent = (newsArticleContent: ParsedHTMLElement, index: number) => {
  const 기사제목 = newsArticleContent?.getElementsByTagName('a')[1].text;
  const 기사요약 = newsArticleContent?.getElementsByTagName('p')[0].text;
  const 뉴스기사이미지 = newsArticleContent?.getElementsByTagName('img')[0].getAttribute('data-src');
  const 기사링크 = 'https://kr.investing.com' + newsArticleContent?.getElementsByTagName('a')[0].getAttribute('href');

  return { index: index, title: 기사제목, imageUrl: 뉴스기사이미지, content: 기사요약, link: 기사링크 };
};

const getArticleContents = (html: ParsedHTMLElement, nums: number) => {
  const newsDiv = html.getElementById('eventTabDiv_news_0');
  const 뉴스기사들 = newsDiv?.getElementsByTagName('article');

  const 반환값 = [];
  for (let i = 0; i < nums; i++) {
    반환값.push(getArticleContent(뉴스기사들[i], i));
  }
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
  const koreaArticle = getArticleContents(koreaCPIHTML, 2);

  const usaCPIHTML = await fetchHTML('https://kr.investing.com/economic-calendar/cpi-69');
  const usaArticle = getArticleContents(usaCPIHTML, 2);

  return {
    korea: koreaArticle,
    usa: usaArticle,
  };
};
