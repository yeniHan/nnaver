import mainMenus from './dummyData/mainMenus';
import METHODS from '../@constants/METHODS';


export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    res.status(200).json(mainMenus);
  }
}
