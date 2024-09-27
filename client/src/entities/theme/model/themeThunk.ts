import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThemeList } from '.';
import { ThemeServices } from '../api';

type RejectValue = {
  message: string;
};

export const getAllThemes = createAsyncThunk<
  ThemeList,
  void,
  { rejectValue: RejectValue }
>('/theme/getThemes', async (_, { rejectWithValue }) => {
  try {
    return await ThemeServices.getThemes();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
