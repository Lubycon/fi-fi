import { css } from '@emotion/css';
import { usePreviousState } from '@lubycon/react';
import { doGet } from 'browser-toolkit';
import { CurrencyResponse, CurrencyTicker } from 'data/currencies/models';
import { Flex, Txt } from 'quantumic-design';
import { useQuery } from 'react-query';
import { getBackgroundColor } from 'data/currencies/utils';
import { currencyName } from 'data/currencies/constants';

interface Props {
  ticker: CurrencyTicker;
}
const InvestingCurrency = ({ ticker }: Props) => {
  const { data } = useQuery(
    'test',
    async () => {
      return (await doGet<CurrencyResponse>(`/api/currencies/${ticker}`)).body;
    },
    {
      refetchInterval: 2000,
    }
  );
  const currency = data?.currency ?? 0;
  const prevCurrency = usePreviousState(currency) ?? 0;

  const { background, text } = getBackgroundColor(currency, prevCurrency);

  return (
    <Flex direction="column">
      <Txt size={14}>현재 {currencyName[ticker] ?? ticker} 환율은</Txt>
      <Txt
        size={80}
        weight={800}
        lineHeight="100px"
        className={css`
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
          background-color: ${background};
          color: ${text};
          padding: 0 24px;
          border-radius: 8px;
        `}
      >
        {data?.currency}{' '}
        <Txt display="inline" as="small" size={24} weight={400}>
          원이에요
        </Txt>
      </Txt>
    </Flex>
  );
};

const Copyrights = () => (
  <div className="poweredBy">
    제공자{' '}
    <a
      href="https://kr.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
      target="_blank"
      rel="nofollow noreferrer"
    >
      Investing.com
    </a>
  </div>
);

InvestingCurrency.Copyrights = Copyrights;

export default InvestingCurrency;
