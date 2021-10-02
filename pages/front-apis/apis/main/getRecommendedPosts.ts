import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getRecommendedPosts = async () => {
  const data = await request({
    url: APIS.RECOMMENDED_POSTS,
    method: METHODS.GET,
    isAuth: false,
  });

  return data;
};

export default getRecommendedPosts;
