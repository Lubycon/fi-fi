import { getInterestRate } from '../../utils';
import { NextApiHandler } from 'next';

const getKoreaInterestRate: NextApiHandler = async (_, res) => {
  const interestRates = await getInterestRate();
  if (Object.values(interestRates).some(v => v.rate == null)) {
    return res.status(404);
  }

  return res.status(200).json(interestRates);
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getKoreaInterestRate(req, res);
  }
};

export default handler;
