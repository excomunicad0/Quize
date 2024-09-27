import { createSlice } from '@reduxjs/toolkit';
import { Answer } from '.';
import { getAnswers } from './answerThunk';
import { message } from 'antd';

type AnswerState = {
  answers: Answer[];
  loading: boolean;
  error: string | null;
};

const initialState: AnswerState = {
  answers: [],
  loading: false,
  error: null,
};

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnswers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnswers.fulfilled, (state, action) => {
        state.loading = false;
        state.answers = action.payload;
        state.error = null;
      })
      .addCase(getAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to get answer';
        message.error(action.payload?.message || 'Failed to get answer');
      });
  },
});

export default answerSlice.reducer;
