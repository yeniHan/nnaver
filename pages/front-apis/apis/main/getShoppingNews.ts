import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getShoppingNews = async ({ page }: { page: number }) => {
  const data = await request({
    url: APIS.SHOPPING_NEWS,
    method: METHODS.GET,
    data: {
      page,
    },
    isAuth: false,
  });

  return data;
};

export default getShoppingNews;
