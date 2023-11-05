import GameCard from './GameCard/GameCard';
import { useContext } from 'react';
import { GamesContext } from '../App/AppContext';
import './GameList.scss';

function GameList() {
  const { games } = useContext(GamesContext);

  return (
    <section className="game-list">
      {!games.length ? (
        <div className="game-list__empty">Nothing found!</div>
      ) : (
        <div className="game-list__inner">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default GameList;
