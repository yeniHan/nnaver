import ppO from './dummyDataModels/PostCategories';
import METHODS from '../@constants/METHODS';

export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    res.status(200).json(ppO.get());
  }

  else if (req.method === METHODS.POST) {
    const preferedCategories = req.body?.preferedCategories || [];
    ppO.set(preferedCategories);
    res.status(200).json(ppO.get());
  }
}