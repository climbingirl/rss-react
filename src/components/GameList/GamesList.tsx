import GameCard from './GameCard/GameCard';
import { GamesListhProps } from './GamesList.types';
import './GamesList.scss';

function GamesList({ games }: GamesListhProps) {
  return (
    <section className="games-list" data-testid="games-list">
      {!games.length ? (
        <div className="games-list__empty" data-testid="games-empty-list">
          Nothing found!
        </div>
      ) : (
        <div className="games-list__inner">
          {games.map((game) => (
            <GameCard game={game} key={game?.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default GamesList;
