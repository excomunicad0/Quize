import { answerReducer } from '@/entities/answer';
import { gameReducer } from '@/entities/game';
import { questionReducer } from '@/entities/question';
import { themeReducer } from '@/entities/theme';
import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    questionList: questionReducer,
    themeList: themeReducer,
    answerList: answerReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
