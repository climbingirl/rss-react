import GameCard from './GameCard/GameCard';
import { useAppContext } from '../../context/AppContext';
import './GameList.scss';

function GameList() {
  const { games } = useAppContext();

  return (
    <section className="game-list">
      {!games.length ? (
        <div className="game-list__empty">Nothing found!</div>
      ) : (
        <div className="game-list__inner">
          {games.map((game) => (
            <GameCard game={game} key={game?.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default GameList;
