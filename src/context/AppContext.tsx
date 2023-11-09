import { PropsWithChildren, createContext, useState } from 'react';
import { GameModel } from '../types/models';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_VALUE_KEY } from '../global-vars';
import { SEARCH_PARAMS } from '../router/searchParams';

interface AppContextValue {
  games: GameModel[];
  setGames: React.Dispatch<React.SetStateAction<GameModel[]>>;
  gamesCount: number;
  setGamesCount: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
}

export const AppContext = createContext<AppContextValue>(null!);

export function AppContextProvider({ children }: PropsWithChildren) {
  const [games, setGames] = useState<GameModel[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  const [params] = useSearchParams();
  const searchValue =
    params.get(SEARCH_PARAMS.SEARCH) ||
    localStorage.getItem(SEARCH_VALUE_KEY) ||
    '';

  const value = {
    games,
    setGames,
    gamesCount,
    setGamesCount,
    pageSize,
    setPageSize,
    searchValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
