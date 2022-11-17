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
