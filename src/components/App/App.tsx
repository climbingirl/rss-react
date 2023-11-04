import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import MainPage from '../../pages/MainPage/MainPage';
import { GameModel } from '../../api/models';
import { useSearchParams } from 'react-router-dom';
import { gamesAPI } from '../../api/api';
import { GamesContext } from './AppContext';

export const SEARCH_VALUE_KEY = 'rssReactIvanovaSearchValue';

function App() {
  const [params] = useSearchParams();
  const searchValue = params.get('search') || '';
  const currentPage = Number(params.get('page')) || 1;
  const [games, setGames] = useState<GameModel[]>([]);
  const [gamesLoading, setGamesLoading] = useState(false);
  const [gamesCount, setGamesCount] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    handleGamesRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentPage, pageSize]);

  async function handleGamesRequest() {
    setGamesLoading(true);
    try {
      const response = await gamesAPI.getGames(
        searchValue,
        currentPage,
        pageSize
      );
      setGames(response.games);
      setGamesCount(response.count);
    } catch {
      setGames([]);
    }
    setGamesLoading(false);
  }

  return (
    <div className="app">
      <Search gamesLoading={gamesLoading} />
      <GamesContext.Provider
        value={{ games, gamesCount, pageSize, setPageSize }}
      >
        <MainPage gamesLoading={gamesLoading} />
      </GamesContext.Provider>
    </div>
  );
}

export default App;
