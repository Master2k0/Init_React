import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async (data: any, thunkApi) => {
    const response = {
      data: {
        initValue: 0,
      },
    };
    return response?.data;
  },
);
