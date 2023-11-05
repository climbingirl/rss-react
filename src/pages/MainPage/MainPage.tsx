import Pagination from '../../components/Pagination/Pagination';
import GameList from '../../components/GameList/GameList';
import Loader from '../../components/Loader/Loader';
import GameDetails from '../../components/GameDetails/GameDetails';
import './MainPage.scss';

interface MainPageProps {
  gamesLoading: boolean;
}

function MainPage({ gamesLoading }: MainPageProps) {
  if (gamesLoading) {
    return <Loader />;
  }

  return (
    <main className="main">
      <Pagination />
      <div className="main__inner">
        <GameList />
        <GameDetails />
      </div>
    </main>
  );
}

export default MainPage;
