import axios, {
  AxiosPromise,
  Method,
  AxiosRequestConfig,
} from 'axios';
import accessToken from '../../api/dummyDataModels/accessToken';

const request = async ({
  url,
  method,
  config = {},
  data,
  isAuth,
}
:{
    url: string; method: string; config?: AxiosRequestConfig; data? : {}; isAuth: boolean;
}) => {

  if(!config?.headers) config.headers = {};

  if (isAuth) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  const castedMethod: Method = method as Method;

  const resData = await axios(url,{
    data: { ...data },
    method: castedMethod,
    ...config,
  }).then((res) => {
    console.log('res.data:', data);
    return res.data;
  }).catch((e) => {
    throw e;
  });

  return resData;
};

export default request;
