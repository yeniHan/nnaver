import METHODS from "../@constants/METHODS";
import ppO from "./dummyDataModels/PreferedPostCategories";



export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    const categoryPosts = ppO.getPreferedCategoryPosts();
    res.status(200).json({ data: categoryPosts });
  }
}