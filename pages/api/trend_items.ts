import METHODS from "../@constants/METHODS";
import getPagination from "./utills/getPagination";
import { trendItems, trendItemCategories } from "./dummyData/trendItems";

export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    const { page } = req?.body;
    const pagination = getPagination({ page, itemsPerPage: 2}, trendItems);
    res.status(200).json({ ...pagination, categories: trendItemCategories});
  }
}