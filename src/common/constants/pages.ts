import { currencyName } from 'data/currencies/constants';

const currencyPages = Object.entries(currencyName).map(([ticker, name]) => {
  return {
    name: `${name} 환율`,
    link: `/currencies/${ticker}`,
  };
});

interface Page {
  category: string;
  links: Array<{ name: string; link: string }>;
}
export const pages: Page[] = [
  {
    category: '금융 정보',
    links: [
      {
        name: '실시간 한미 금리차',
        link: '/korea-usa-interest-rate',
      },
      {
        name: '실시간 미국채 금리',
        link: '/us-treasury-rate',
      },
      {
        name: '실시간 한미 소비자물가지수',
        link: '/consumer-price-index',
      },
      {
        name: '퀀트 데이터',
        link: '/quant-data',
      },
    ],
  },
  {
    category: '실시간 환율',
    links: [...currencyPages],
  },
  {
    category: '실생활 계산기',
    links: [
      { name: '연봉 계산기', link: '/salary-calculator' },
      { name: '성장률 계산기', link: '/growth-rate' },
      { name: '복리 계산기', link: '/compound-interest' },
    ],
  },
  {
    category: '단위 계산기',
    links: [{ name: '평수 계산기', link: '/korean-area' }],
  },
];
