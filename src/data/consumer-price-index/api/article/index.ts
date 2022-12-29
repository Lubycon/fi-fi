import { getTopTwoArticle } from '../../utils';
import { NextApiHandler } from 'next';

const getArticle: NextApiHandler = async (_, res) => {
  const articles = await getTopTwoArticle();

  if (Object.values(articles).some(v => v.first == null)) {
    return res.status(404).end();
  }

  return res.status(200).json(articles);
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getArticle(req, res);
  }
};

export default handler;
