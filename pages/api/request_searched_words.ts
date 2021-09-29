import RecentSearchedWordsModel from './dummyDataModels/RecentSearchedWords';
import METHODS from '../@constants/METHODS';

const dtO = new RecentSearchedWordsModel();

export default function handler (req, res) {
  if (req.method === METHODS.DELETE) {
    const { id, all } = req?.body;

    dtO.delete(id, all);
  }

  res.status(200).json(dtO.get());
}
