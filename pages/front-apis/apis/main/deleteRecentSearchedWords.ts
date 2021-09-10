import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const deleteRecentSearchedWords = async ({ all, id }: { all?: boolean; id?: string }) => {
  const data = await request({
    url: APIS.GET_RECENT_SEARCHED_WORDS,
    method: METHODS.DELETE,
    data: {
      all,
      id,
    },
    isAuth: false,
  });

  return data;
};

export default deleteRecentSearchedWords;
