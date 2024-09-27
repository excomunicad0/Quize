import { createAsyncThunk } from '@reduxjs/toolkit';
import { Game } from '.';
import { GameService } from '../api';
import { AxiosError } from 'axios';

type RejectValue = {
  message: string;
};

export const createGame = createAsyncThunk<
  Game,
  void,
  { rejectValue: RejectValue }
>('game/createGame', async (_, { rejectWithValue }) => {
  try {
    return await GameService.createGame();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const resetGame = createAsyncThunk<
  Game,
  void,
  { rejectValue: RejectValue }
>('game/resetGame', async (_, { rejectWithValue }) => {
  try {
    return await {game: null};
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateGame = createAsyncThunk<
  Game,
  { id: number; score: number },
  { rejectValue: RejectValue }
>('game/updateGame', async ({ id, score }, { rejectWithValue }) => {
  try {
    return await GameService.updateGame(id, score);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createGameUser = createAsyncThunk<
  Game,
  { gameId: number; questionId: number; isRightAnswer: boolean },
  { rejectValue: RejectValue }
>('game/createGameUser', async ({ gameId, questionId, isRightAnswer }, { rejectWithValue }) => {
  try {
    return await GameService.createGameUser(gameId, questionId, isRightAnswer);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
