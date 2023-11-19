import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import GameDetails from '../../components/GameDetails/GameDetails';
import Search from '../../components/Search/Search';
import GamesList from '../../components/GameList/GamesList';
import { useAppSelector } from '../../hooks/redux';
import { useGetGamesQuery } from '../../services/games';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../router/searchParams';
import './MainPage.scss';

function MainPage() {
  const { searchValue, pageSize, isGamesLoading } = useAppSelector(
    (state) => state.games
  );
  const [params] = useSearchParams();
  const page = Number(params.get(SEARCH_PARAMS.PAGE)) || 1;
  const { data } = useGetGamesQuery({
    searchValue,
    pageSize,
    page,
  });
  const games = data?.results || [];
  const gamesCount = data?.count || 0;

  return (
    <section className="main-page">
      <Search searchValue={searchValue} isGamesLoading={isGamesLoading} />
      {isGamesLoading ? (
        <Loader />
      ) : (
        <>
          <Pagination gamesCount={gamesCount} />
          <div className="main__inner">
            <GamesList games={games} />
            <GameDetails />
          </div>
        </>
      )}
    </section>
  );
}

export default MainPage;
