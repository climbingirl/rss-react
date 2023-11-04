import Pagination from '../../components/Pagination/Pagination';
import GameList from '../../components/GameList/GameList';
import Loader from '../../components/Loader/Loader';

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
      </div>
    </main>
  );
}

export default MainPage;
