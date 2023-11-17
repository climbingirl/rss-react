import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { gamesState } from './gamesSlice.types';

const initialState: gamesState = {
  searchValue: '',
  currentPage: 0,
  pageSize: 20,
  gamesCount: 0,
  gamesLoading: false,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = gamesSlice.actions;
export default gamesSlice.reducer;
