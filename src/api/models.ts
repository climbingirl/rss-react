export interface GamesData {
  count: number;
  next: string;
  previous: boolean;
  results: GameResponseModel[];
}

export interface GamesResponse {
  count: number;
  games: GameModel[];
}

export interface GameResponseModel {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  suggestions_count: number;
}

export interface GameModel {
  id: number;
  name: string;
  image: string;
  rating: number;
  suggestionsCount: number;
}

export interface GameDetailsResponseModel {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  rating: number;
  released: string;
  suggestions_count: number;
  website: string;
}

export interface GameDetailsModel {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  released: string;
  suggestionsCount: number;
  website: string;
}
