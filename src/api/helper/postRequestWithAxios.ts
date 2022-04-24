import axios, { AxiosResponse } from 'axios';

const postRequestWithAxios = async (
  requestUrl: string,
  bodyData: any,
): Promise<AxiosResponse<any>> => {
  return axios.post(requestUrl, bodyData);
};
export default postRequestWithAxios;
