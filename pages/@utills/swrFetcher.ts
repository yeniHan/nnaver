import request from '../@utills/request';

const swrFetcher = (config) => request({ ... config}).then((res) => res?.json());

export default swrFetcher;
