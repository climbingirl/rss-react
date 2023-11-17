import GameCard from './GameCard/GameCard';
import './GameList.scss';

function GameList() {
  return (
    <section className="game-list" data-testid="games-list">
      {!games.length ? (
        <div className="game-list__empty" data-testid="games-empty-list">
          Nothing found!
        </div>
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
