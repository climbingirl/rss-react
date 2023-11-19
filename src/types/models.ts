export interface GameModel {
  id: number;
  name: string;
  background_image: string;
}

export interface GameDetailsModel {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  rating: number;
  website: string;
}
