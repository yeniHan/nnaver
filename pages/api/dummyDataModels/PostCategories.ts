import allPosts from '../dummyData/recommendedPosts';
import allPostCategories from '../dummyData/postCategories';
import postCategories from "../dummyData/postCategories";

class PostCategories {
    postCategories = [...allPostCategories];

    get () {
      return this.postCategories;
    }

    set (newPreferedPostCategoryNames: string[]) {
      this.postCategories = allPostCategories.map((v) => ({
        ...v,
        isPrefered: newPreferedPostCategoryNames?.includes(v?.name),
      }));
    }

    getPreferedCategoryPosts () {
      const hasPreferedCategories = postCategories?.find((v) => v?.isPrefered);

      if (hasPreferedCategories) {
        return allPosts?.filter((post) => {
          const isPreferedCategoryPost = postCategories?.find((v) => v?.name === post?.category)?.isPrefered;
          return isPreferedCategoryPost;
        });
      }
      return allPostCategories;
    }
}

const dO = new PostCategories();

export default dO;
