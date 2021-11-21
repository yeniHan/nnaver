import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getTrendItems = async ({ page }: { page: number }) => {
  const data = await request({
    url: APIS.TREND_ITEMS,
    method: METHODS.GET,
    data: {
      page,
    },
    isAuth: false,
  });

  return data;
};

export default getTrendItems;
