import { getConsumerPriceIndex } from '../../utils';
import { NextApiHandler } from 'next';

const getCountriesConsumerPriceIndex: NextApiHandler = async (_, res) => {
  const consumerPriceIndexs = await getConsumerPriceIndex();
  if (Object.values(consumerPriceIndexs).some(v => v.real == null)) {
    return res.status(404);
  }

  return res.status(200).json(consumerPriceIndexs);
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getCountriesConsumerPriceIndex(req, res);
  }
};

export default handler;
