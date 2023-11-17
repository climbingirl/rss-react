import { configureStore } from '@reduxjs/toolkit';
import gamesSliceReducer from './gamesSlice/gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
