import { GameDetailsModel, GameModel } from '../types/models';
import { GetGamesApiResponse, GetGamesPromise } from './models';
import { selectGame, selectGames } from './selectors';

const baseUrl = 'https://api.rawg.io/api/games';
const apiKey = '136080c4de0a4607b62f882bf2cdcdf1';

export const gamesAPI = {
  getGames: async (
    search: string,
    page: number,
    pageSize: number
  ): Promise<GetGamesPromise> => {
    const params = new URLSearchParams({
      platforms: '187',
      page: String(page),
      page_size: String(pageSize),
      search: search,
      key: apiKey,
    }).toString();

    const response = await fetch(`${baseUrl}?${params}`);
    if (response.ok !== true) throw new Error('Games request error');
    const data: GetGamesApiResponse = await response.json();
    const games: GameModel[] = data.results.map(selectGames);
    return { count: data.count, games };
  },

  getGame: async (id: number): Promise<GameDetailsModel> => {
    const response = await fetch(`${baseUrl}/${id}?key=${apiKey}`);
    if (response.ok !== true) throw new Error('Game request error');
    const data = await response.json();
    return selectGame(data);
  },
};
