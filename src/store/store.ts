import { configureStore } from '@reduxjs/toolkit';
import gamesSliceReducer from './gamesSlice/gamesSlice';
import { gamesApi } from '../services/games';

export const store = configureStore({
  reducer: {
    games: gamesSliceReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
