import Pagination from '../../components/Pagination/Pagination';
import GameList from '../../components/GameList/GameList';
import Loader from '../../components/Loader/Loader';
import GameDetails from '../../components/GameDetails/GameDetails';
import Search from '../../components/Search/Search';
import { gamesAPI } from '../../api/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { SEARCH_PARAMS } from '../../router/searchParams';
import './MainPage.scss';

function MainPage() {
  const [params, setParams] = useSearchParams();
  const currentPage = Number(params.get(SEARCH_PARAMS.PAGE)) || 1;
  const { setGames, pageSize, setGamesCount, searchValue } = useAppContext();
  const [gamesLoading, setGamesLoading] = useState(false);

  useEffect(() => {
    params.set(SEARCH_PARAMS.SEARCH, searchValue);
    params.set(SEARCH_PARAMS.PAGE, String(currentPage));
    setParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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

  return (
    <section className="main-page">
      <Search gamesLoading={gamesLoading} />
      {gamesLoading ? (
        <Loader />
      ) : (
        <>
          <Pagination />
          <div className="main__inner">
            <GameList />
            <GameDetails />
          </div>
        </>
      )}
    </section>
  );
}

export default MainPage;
