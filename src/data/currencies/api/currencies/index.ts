import { decommaizeNumber } from 'common/utils/number';
import { getCurrency, isValidCurrencyTicker } from 'data/currencies/utils';
import { NextApiHandler } from 'next';
import { isString } from 'temen';

const getCurrencyHandler: NextApiHandler = async (req, res) => {
  const { currency } = req.query;
  if (!isString(currency) || !isValidCurrencyTicker(currency)) {
    return res.status(400);
  }

  const value = await getCurrency(currency);
  if (value == null) {
    return res.status(404);
  }

  return res.status(200).json({ currency: Number(decommaizeNumber(value)) });
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getCurrencyHandler(req, res);
  }
};

export default handler;
