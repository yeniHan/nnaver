import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';
import PostCategoryType from 'api/dummyTypes/PostCategory.type';

const postPreferdCategories = async ({ preferedCategories }:{ preferedCategories: PostCategoryType[] }) => {
  await request({
    url: APIS.CATEGORY_PREFERENCE,
    method: METHODS.POST,
    isAuth: true,
    data: {
      preferedCategories,
    }
  });
};

export default postPreferdCategories;
