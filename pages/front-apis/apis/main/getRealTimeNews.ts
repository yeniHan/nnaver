import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getRealTimeNews = async () => {
  const data = await request({
    url: APIS.REAL_TIME_NEWS,
    method: METHODS.GET,
    isAuth: false,
  });

  return data;
};

export default getRealTimeNews;
