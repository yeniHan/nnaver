import realTimeNews from './dummyData/realTimeNews';
import METHODS from '../@constants/METHODS';


export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    res.status(200).json(realTimeNews);
  }
}
