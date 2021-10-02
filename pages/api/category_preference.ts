import ppO from './dummyDataModels/PreferedPostCategories';
import METHODS from '../@constants/METHODS';

export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    res.status(200).json(ppO.get());
  }

  else if (req.method === METHODS.POST) {
    const newMedia = req.body.media;
    ppO.add(newMedia);
    res.status(200).json(ppO.get());
  }

  else if (req.method === METHODS.DELETE) {
    const newMedia = req.body.media;
    ppO.delete(newMedia);
    res.status(200).json(ppO.get());
  }
}