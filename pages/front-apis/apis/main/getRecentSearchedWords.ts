import request from '../../../@utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getRecentSearchedWords = async () => {
  const data = await request({
    url: APIS.RECENT_SEARCHED_WORDS,
    method: METHODS.GET,
    isAuth: true,
  });

  return data;
};

export default getRecentSearchedWords;
