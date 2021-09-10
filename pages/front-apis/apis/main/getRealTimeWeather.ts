import request from '../../utills/request';
import APIS from '../../../@constants/APIS';
import METHODS from '../../../@constants/METHODS';

const getRealTimeWeather = async () => {
  const data = await request({
    url: APIS.GET_REAL_TIME_WEATHER,
    method: METHODS.GET,
    isAuth: false,
  });

  return data;
};

export default getRealTimeWeather;
