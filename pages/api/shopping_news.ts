import METHODS from "../@constants/METHODS";
import shoppingNews from "./dummyData/shoppingNews";
import getPagination from './utills/getPagination';

export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    const { page } = req?.body;
    const pagination = getPagination({ page, itemsPerPage: 7}, shoppingNews);
    res.status(200).json(pagination);
  }
}