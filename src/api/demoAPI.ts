import axiosClient from './axiosClient';

const endpointDemo = '/demo';
const demoAPI = {
  getApi: async (id: string, param: any) =>
    await axiosClient.get(`${endpointDemo}/${id}`, { params: param }),
};

export default demoAPI;
