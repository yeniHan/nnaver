import METHODS from "../@constants/METHODS";
import ppO from "./dummyDataModels/PostCategories";



export default function handler (req, res) {
  if (req.method === METHODS.GET) {
    const posts = ppO.getPreferedCategoryPosts();
    const categories = ppO.get();

    res.status(200).json({
      posts,
      categories,
    });
  }
}