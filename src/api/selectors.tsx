import {
  GameDetailsModel,
  GameDetailsResponseModel,
  GameModel,
  GameResponseModel,
} from './models';

export const selectGames = (game: GameResponseModel): GameModel => ({
  id: game?.id,
  name: game?.name,
  image: game?.background_image,
  rating: game?.rating,
  suggestionsCount: game?.suggestions_count,
});

export const selectGame = (
  game: GameDetailsResponseModel
): GameDetailsModel => ({
  id: game?.id,
  name: game?.name,
  image: game?.background_image,
  description: game?.description_raw,
  rating: game?.rating,
  released: game?.released,
  suggestionsCount: game?.suggestions_count,
  website: game?.website,
});
