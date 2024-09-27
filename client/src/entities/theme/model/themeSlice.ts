import { createSlice } from '@reduxjs/toolkit';
import { getAllThemes } from './themeThunk';
import { message } from 'antd';

type ThemeState = {
  themes: Theme[];
  loading: boolean;
  error: string | null;
};

const initialState: ThemeState = {
  themes: [],
  loading: false,
  error: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThemes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllThemes.fulfilled, (state, action) => {
        state.loading = false;
        state.themes = action.payload;
        state.error = null;
      })
      .addCase(getAllThemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to get themes';
        message.error(action.payload?.message || 'Failed to get themes');
      });
  },
});

export default themeSlice.reducer;
