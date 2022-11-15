import { fetchHTML } from 'common/utils/html';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;
type ParsedHTMLElement = UnwrapPromise<ReturnType<typeof fetchHTML>>;

const getConsumerPriceIndexInfo = (html: ParsedHTMLElement) => {
  const 물가지수표 = html.getElementById('releaseInfo');
  console.log(물가지수표);
  const 이전값 = 물가지수표?.querySelector(`arial_14 noBold blackFont`);
  const 예측값 = 물가지수표?.querySelector(`arial_14 noBold`);
  const 실제값 = 물가지수표?.querySelector('arial_14 greenFont');
  const 발표일 = 물가지수표?.querySelector(`noBold`);

  return {
    previous: 이전값,
    prediction: 예측값,
    real: 실제값,
    announceDate: 발표일,
  };
};

export const getConsumerPriceIndex = async () => {
  const koreaCPIHTML = await fetchHTML(`https://kr.investing.com/economic-calendar/south-korean-cpi-744`);
  console.log(koreaCPIHTML);
  const koreaCPIMoM = getConsumerPriceIndexInfo(koreaCPIHTML);

  const usaCPIHTML = await fetchHTML(`https://kr.investing.com/economic-calendar/cpi-69`);
  const usaCPIMoM = getConsumerPriceIndexInfo(usaCPIHTML);

  return {
    korea: koreaCPIMoM,
    usa: usaCPIMoM,
  };
};
