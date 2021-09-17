import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const deleteNewsStandsMedia = async ({ media }:{ media: string }) => {
  const data = await request({
    url: APIS.NEWS_STANDS_SUBSCRIPTION,
    method: METHODS.DELETE,
    isAuth: true,
    data: {
      media,
    }
  });

  return data;
};

export default deleteNewsStandsMedia;
