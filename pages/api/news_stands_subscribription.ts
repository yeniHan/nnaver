import nsO from './dummyDataModels/NewsStandSetting';
import METHODS from '../@constants/METHODS';

export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    res.status(200).json(nsO.get());
  }

  else if (req.method === METHODS.POST) {
    const newMedia = req.body.media;
    nsO.add(newMedia);
    res.status(200).toJS(nsO.get());
  }

  else if (req.method === METHODS.DELETE) {
    const newMedia = req.body.media;
    nsO.delete(newMedia);
    res.status(200).toJS(nsO.get());
  }
}