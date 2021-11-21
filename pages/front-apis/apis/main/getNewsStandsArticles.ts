import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getNewsStandsArticles = async (_, sorter) => {
  const res = await request({
    url: `${APIS.NEWS_STANDS_ARTICLES}/?sorter=${sorter}`,
    method: METHODS.GET,
    isAuth: true,
  });

  return res?.data;
};

export default getNewsStandsArticles;
