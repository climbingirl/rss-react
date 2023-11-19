import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { gamesState } from './gamesSlice.types';

const initialState: gamesState = {
  searchValue: '',
  pageSize: 20,
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
  },
});

export const { setSearchValue, setPageSize } = gamesSlice.actions;
export default gamesSlice.reducer;
