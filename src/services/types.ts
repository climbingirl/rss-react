import { GameModel } from '../types/models';

export interface GetGamesParams {
  searchValue?: string;
  pageSize?: number;
  page?: number;
  id?: number;
}

export interface GetGamesResponse {
  count: number;
  next: string;
  previous: boolean;
  results: GameModel[];
}
