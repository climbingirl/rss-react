import { GameDetailsModel, GameModel } from '../types/models';
import { GameApiModel, GetGameApiResponse } from './models';

export const selectGames = (game: GameApiModel): GameModel => ({
  id: game?.id,
  name: game?.name,
  image: game?.background_image,
  rating: game?.rating,
  suggestionsCount: game?.suggestions_count,
});

export const selectGame = (game: GetGameApiResponse): GameDetailsModel => ({
  id: game?.id,
  name: game?.name,
  image: game?.background_image,
  description: game?.description_raw,
  rating: game?.rating,
  released: game?.released,
  suggestionsCount: game?.suggestions_count,
  website: game?.website,
});
