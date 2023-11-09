export interface GameModel {
  id: number;
  name: string;
  image: string;
  rating: number;
  suggestionsCount: number;
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
