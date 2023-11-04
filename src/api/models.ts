export interface GamesData {
  count: number;
  next: string;
  previous: boolean;
  results: object[];
}

export interface GamesResponse {
  count: number;
  games: GameModel[];
}

export interface GameModel {
  id: number;
  name: string;
  image: string;
  rating: number;
  released: string;
  suggestionsCount: number;
}
