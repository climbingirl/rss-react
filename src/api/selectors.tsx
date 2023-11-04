export const selectGames = (game: object) => ({
  id: game?.id,
  name: game?.name,
  image: game?.background_image,
  rating: game?.rating,
  released: game?.released,
  suggestionsCount: game?.suggestions_count,
});
