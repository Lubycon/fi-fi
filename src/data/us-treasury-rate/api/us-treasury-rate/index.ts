import { getUSTreasuryRate } from '../../utils';
import { NextApiHandler } from 'next';

const getKoreaInterestRate: NextApiHandler = async (req, res) => {
  const { year } = req.query;

  if (isNaN(Number(year))) {
    return res.status(400);
  }

  const treasuryRate = await getUSTreasuryRate(Number(year));

  return res.status(200).json(treasuryRate);
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getKoreaInterestRate(req, res);
  }
};

export default handler;
