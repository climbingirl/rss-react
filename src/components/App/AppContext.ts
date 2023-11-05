import { createContext } from 'react';
import { GameModel } from '../../api/models';

interface Games {
  games: GameModel[];
  gamesCount: number;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
}

export const GamesContext = createContext<Games>({
  games: [],
  gamesCount: 0,
  pageSize: 0,
  setPageSize: () => {},
});
