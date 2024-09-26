import { createSlice } from '@reduxjs/toolkit';
import { getAllQuestions } from './questionThunk';
import { message } from 'antd';

type QuestionState = {
  questions: Question[];
  loading: boolean;
  error: string | null;
};

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.error = null;
      })
      .addCase(getAllQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to get questions';
        message.error(action.payload?.message || 'Failed to get questions');
      })
  },
});
