import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const postRealTimeNews = async ({ media }:{ media: string }) => {
  const data = await request({
    url: APIS.NEWS_STANDS_SUBSCRIPTION,
    method: METHODS.POST,
    isAuth: true,
    data: {
      media,
    }
  });

  return data;
};

export default postRealTimeNews;
