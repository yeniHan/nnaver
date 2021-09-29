import allPosts from '../dummyData/recommendedPosts';

class PreferedPostCategories{
    preferedPostCategories = [];

    get () {
      return this.preferedPostCategories;
    }

    set (newPreferedPostCategories) {
      this.preferedPostCategories = newPreferedPostCategories;
    }

    add (category) {
      this.preferedPostCategories.push(category);
    }

    delete (category) {
      this.preferedPostCategories = this.preferedPostCategories.filter((v) => v !== category);
    };

    checkIsPrefered (category) {
      return this.preferedPostCategories?.indexOf(category) >= 0;
    }

    getPreferedCategoryPosts () {
      let categoryPosts = {};

      Object.entries(allPosts).forEach(([category, posts]) => {
        const isPrefered = this.checkIsPrefered(category);
        if (isPrefered) categoryPosts[category] = posts;
      });

      return categoryPosts;
    }
}

const dO = new PreferedPostCategories();

export default dO;
