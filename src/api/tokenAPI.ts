import axiosClient from './axiosClient';

const url = '/auth/generateToken';
const demoTokenAPI = {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  getToken: (data: any) =>
    axiosClient.post(url, {
      data,
    }),
};

export default demoTokenAPI;
