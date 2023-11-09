import { GameModel } from '../types/models';

export interface GetGamesApiResponse {
  count: number;
  next: string;
  previous: boolean;
  results: GameApiModel[];
}

export interface GameApiModel {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  suggestions_count: number;
}

export interface GetGamesPromise {
  count: number;
  games: GameModel[];
}

export interface GetGameApiResponse {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  rating: number;
  released: string;
  suggestions_count: number;
  website: string;
}
