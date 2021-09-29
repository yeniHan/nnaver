import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const deletePreferedPostCategory = async ({ category }:{ category: string }) => {
  const data = await request({
    url: APIS.POST_CATEGORY_PREFERENCE,
    method: METHODS.DELETE,
    isAuth: true,
    data: {
      category,
    }
  });

  return data;
};

export default deletePreferedPostCategory;
