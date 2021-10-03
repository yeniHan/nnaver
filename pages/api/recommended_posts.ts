import METHODS from "../@constants/METHODS";
import ppO from "./dummyDataModels/PreferedPostCategories";



export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    const posts = ppO.getPreferedCategoryPosts();
    const preferedCategories = ppO.get();

    res.status(200).json({
      posts,
      preferedCategories,
    });
  }
}