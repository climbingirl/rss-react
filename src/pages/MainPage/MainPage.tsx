import Pagination from '../../components/Pagination/Pagination';
import GameList from '../../components/GameList/GameList';
import Loader from '../../components/Loader/Loader';
import GameDetails from '../../components/GameDetails/GameDetails';
import Search from '../../components/Search/Search';
import { GamesContext } from '../../components/App/AppContext';
import { gamesAPI } from '../../api/api';
import { useEffect, useState } from 'react';
import { GameModel } from '../../api/models';
import { useSearchParams } from 'react-router-dom';
import './MainPage.scss';

function MainPage() {
  const SEARCH_VALUE_KEY = 'rssReactIvanovaSearchValue';
  const [params, setParams] = useSearchParams();
  const searchValue = params.get('search') || '';
  const currentPage = Number(params.get('page')) || 1;
  const [games, setGames] = useState<GameModel[]>([]);
  const [gamesLoading, setGamesLoading] = useState(false);
  const [gamesCount, setGamesCount] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    params.set('search', searchValue);
    params.set('page', String(currentPage));
    setParams(params);
    loadGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentPage, pageSize]);

  async function loadGames() {
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
  if (gamesLoading) {
    return <Loader />;
  }

  return (
    <GamesContext.Provider value={{ games, gamesCount, pageSize, setPageSize }}>
      <section className="main-page">
        <Search gamesLoading={gamesLoading} searchValueKey={SEARCH_VALUE_KEY} />
        <Pagination />
        <div className="main__inner">
          <GameList />
          <GameDetails />
        </div>
      </section>
    </GamesContext.Provider>
  );
}

export default MainPage;
