import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetGamesParams, GetGamesResponse } from './types';
import { GameDetailsModel } from '../types/models';
import {
  setGameDetailsLoading,
  setGamesLoading,
} from '../store/gamesSlice/gamesSlice';

const baseUrl = 'https://api.rawg.io/api/games';
const apiKey = '136080c4de0a4607b62f882bf2cdcdf1';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGames: builder.query<GetGamesResponse, GetGamesParams>({
      query: ({ searchValue, pageSize, page }) => ({
        url: '',
        params: {
          key: apiKey,
          platforms: 187,
          search: searchValue,
          page_size: pageSize,
          page,
        },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setGamesLoading(true));
        try {
          await queryFulfilled;
          dispatch(setGamesLoading(false));
        } catch (err) {
          dispatch(setGamesLoading(false));
        }
      },
    }),
    getGame: builder.query<GameDetailsModel, number>({
      query: (id) => ({
        url: `${id}`,
        params: {
          key: apiKey,
        },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setGameDetailsLoading(true));
        try {
          await queryFulfilled;
          dispatch(setGameDetailsLoading(false));
        } catch (err) {
          dispatch(setGameDetailsLoading(false));
        }
      },
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = gamesApi;
