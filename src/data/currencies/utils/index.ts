import colors from 'open-color';
import { fetchHTML } from 'common/utils/html';
import { CurrencyTicker } from '../models';

export const getCurrency = async (currency: CurrencyTicker) => {
  const html = await fetchHTML(`https://www.investing.com/currencies/${currency}`);
  return html.querySelector('span[data-test="instrument-price-last"]')?.innerText;
};

export const isValidCurrencyTicker = (currencyTicker: string): currencyTicker is CurrencyTicker => {
  const tickers = currencyTicker.split('-');
  const isValidTickers = tickers.every(ticker => /[a-zA-Z]{3}/.test(ticker));
  return tickers.length === 2 && isValidTickers;
};

export const getBackgroundColor = (currency: number, prevCurrency: number) => {
  if (currency > prevCurrency) {
    return {
      background: colors.red[1],
      text: colors.red[5],
    };
  } else if (currency < prevCurrency) {
    return {
      background: colors.blue[1],
      text: colors.blue[5],
    };
  } else {
    return {
      background: undefined,
      text: undefined,
    };
  }
};
