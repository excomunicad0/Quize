import { createSlice } from '@reduxjs/toolkit';
import { Game } from '.';
import { createGame, createGameUser, updateGame } from './gameThunk';
import { message } from 'antd';

type GameState = {
  game: Game | null;
  loading: boolean;
  error: string | null;
};

const initialState: GameState = {
  game: null,
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.loading = false;
        state.game = action.payload;
        state.error = null;
      })
      .addCase(createGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to create game';
        message.error(action.payload?.message || 'Failed to create game');
      })
      .addCase(updateGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateGame.fulfilled, (state, action) => {
        state.loading = false;
        state.game = action.payload;
        state.error = null;
      })
      .addCase(updateGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to update game';
        message.error(action.payload?.message || 'Failed to update game');
      })
      .addCase(createGameUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGameUser.fulfilled, (state, action) => {
        state.loading = false;
        state.game = action.payload;
        state.error = null;
      })
      .addCase(createGameUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to create game user';
        message.error(action.payload?.message || 'Failed to create game user');
      });
  },
});

export default gameSlice.reducer;
