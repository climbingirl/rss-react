import Pagination from '../../components/Pagination/Pagination';
import GameList from '../../components/GameList/GameList';
import Loader from '../../components/Loader/Loader';
import GameDetails from '../../components/GameDetails/GameDetails';
import Search from '../../components/Search/Search';
import { useAppSelector } from '../../hooks/redux';
import './MainPage.scss';

function MainPage() {
  const gamesLoading = useAppSelector((state) => state.games.gamesLoading);

  return (
    <section className="main-page">
      <Search />
      {gamesLoading ? (
        <Loader />
      ) : (
        <>
          {/* <Pagination />
          <div className="main__inner">
            <GameList />
            <GameDetails />
          </div> */}
        </>
      )}
    </section>
  );
}

export default MainPage;
