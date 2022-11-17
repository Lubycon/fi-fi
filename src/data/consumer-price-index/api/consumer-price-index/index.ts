import { getConsumerPriceIndex } from '../../utils';
import { NextApiHandler } from 'next';

const getCountriesConsumerPriceIndex: NextApiHandler = async (_, res) => {
  const consumerPriceIndecies = await getConsumerPriceIndex();

  if (Object.values(consumerPriceIndecies).some(v => v.real == null)) {
    return res.status(404).end();
  }

  return res.status(200).json(consumerPriceIndecies);
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getCountriesConsumerPriceIndex(req, res);
  }
};

export default handler;
