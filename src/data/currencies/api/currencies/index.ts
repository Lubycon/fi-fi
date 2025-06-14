import { chromium } from 'playwright';
import { NextRequest, NextResponse } from 'next/server';
import { decommaizeNumber } from 'common/utils/number';
import { isValidCurrencyTicker } from 'data/currencies/utils';
import { isString } from 'temen';
import { CurrencyTicker } from 'data/currencies/models';

export async function GET(_: NextRequest, { params }: { params: { currency: string } }) {
  const currency = params.currency;

  if (!isString(currency) || !isValidCurrencyTicker(currency)) {
    return NextResponse.json({ error: 'Invalid currency' }, { status: 400 });
  }

  const value = await getCurrencyWithPlaywright(currency);
  if (value == null) {
    return NextResponse.json({ error: 'Currency not found' }, { status: 404 });
  }

  return NextResponse.json({ currency: Number(decommaizeNumber(value)) });
}

const getCurrencyWithPlaywright = async (currency: CurrencyTicker): Promise<string | null> => {
  const url = `https://www.investing.com/currencies/${currency}`;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('[data-test="instrument-price-last"]');

    const value = await page.$eval('[data-test="instrument-price-last"]', el => el.textContent?.trim() ?? null);

    return value;
  } catch (err) {
    console.error(`[Playwright] 환율 스크래핑 실패: ${currency}`, err);
    return null;
  } finally {
    await browser.close();
  }
};
