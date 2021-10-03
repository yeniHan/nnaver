import allPosts from '../dummyData/recommendedPosts';
import allPostCategories from '../dummyData/postCategories';

class PreferedPostCategories{
    preferedPostCategories = [...allPostCategories];

    get () {
      return this.preferedPostCategories;
    }

    set (newPreferedPostCategories) {
      this.preferedPostCategories = newPreferedPostCategories;
    }

    getCategoryByName (category) {
      return this.preferedPostCategories?.find((v) => v?.name === category);
    }

    add (category) {
      const catO = this.getCategoryByName(category);
      this.preferedPostCategories.push(catO);
    }

    delete (category) {
      this.preferedPostCategories = this.preferedPostCategories.filter((v) => v?.name !== category);
    };

    checkIsPrefered (category) {
      return !!this.getCategoryByName(category);
    }

    getPreferedCategoryPosts () {
      return allPosts.filter((v) => this.checkIsPrefered(v?.category));
    }
}

const dO = new PreferedPostCategories();

export default dO;
