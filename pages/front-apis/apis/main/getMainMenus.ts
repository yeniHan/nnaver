import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getMainMenus = async () => {
  const data = await request({
    url: APIS.GET_MAIN_MENUS,
    method: METHODS.GET,
    isAuth: false,
  });

  return data;
};

export default getMainMenus;
