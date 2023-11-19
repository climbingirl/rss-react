import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { gamesState } from './gamesSlice.types';

const initialState: gamesState = {
  searchValue: '',
  pageSize: 20,
  isGamesLoading: false,
  isGameDetailsLoading: false,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setGamesLoading: (state, action: PayloadAction<boolean>) => {
      state.isGamesLoading = action.payload;
    },
    setGameDetailsLoading: (state, action: PayloadAction<boolean>) => {
      state.isGameDetailsLoading = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setPageSize,
  setGamesLoading,
  setGameDetailsLoading,
} = gamesSlice.actions;
export default gamesSlice.reducer;
