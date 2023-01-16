import { createAsyncThunk } from '@reduxjs/toolkit';

import demoAPI from '@/api/demoAPI';
import demoTokenAPI from '@/api/tokenAPI';

// First, create the thunk

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data

//   }
// )
export const getDemoById = createAsyncThunk(
  'demo/getDemoById',
  async (data: any, thunkAPI) => {
    try {
      const response = await demoAPI.getApi(data.id, data.param);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
      // return e;
    }
  },
);

export const getTokenDemo = createAsyncThunk(
  'demo/getTokenDemo',
  async (data: any, thunkAPI) => {
    try {
      const response = await demoTokenAPI.getToken(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
