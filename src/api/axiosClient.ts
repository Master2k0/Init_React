// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosError } from 'axios';

import { IResponseError } from '@/types/api/response';

const { VITE_API_URL } = import.meta.env;
const axiosClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = '1323';
    if (token != null && config.headers != null) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error.response.data),
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<IResponseError>) =>
    // toastError('An error occurred', error.response?.data.message, 4000);
    await Promise.reject(error.response?.data),
);

export default axiosClient;
