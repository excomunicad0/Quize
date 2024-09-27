import { createAsyncThunk } from '@reduxjs/toolkit';
import { Answer, AnswerList } from '.';
import { AnswerServices } from '../api';
import { AxiosError } from 'axios';

type RejectValue = {
  message: string;
};

export const getAnswers = createAsyncThunk<
  Answer[],
  number,
  { rejectValue: RejectValue }
>('answer/getAnswers', async (id, { rejectWithValue }) => {
  try {
    return await AnswerServices.getAnswers(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
