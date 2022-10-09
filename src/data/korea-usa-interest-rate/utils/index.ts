import { fetchHTML } from 'common/utils/html';
import { InterestRateInfo } from '../models';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;
type ParsedHTMLElement = UnwrapPromise<ReturnType<typeof fetchHTML>>;

const getInterestRateInfo = (html: ParsedHTMLElement, targetClassName: string): InterestRateInfo => {
  const 금리표 = html.getElementById('side_central_banks');
  const 은행정보 = 금리표?.querySelector(`.${targetClassName}`);

  const 금리 = 은행정보?.parentNode.nextElementSibling.nextElementSibling.innerText;
  const 다음금리결정일 = 은행정보?.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;

  return {
    rate: 금리,
    nextDecision: 다음금리결정일,
  };
};

export const getInterestRate = async () => {
  const html = await fetchHTML('https://kr.investing.com/central-banks/');
  const koreaInterestInfo = getInterestRateInfo(html, 'South_Korea');
  const usaInterestInfo = getInterestRateInfo(html, 'USA');

  return {
    korea: koreaInterestInfo,
    usa: usaInterestInfo,
  };
};
