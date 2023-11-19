import { GameDetailsCardProps } from './GameDetailsCard.types';
import './GameDetailsCard.scss';

function GameDetailsCard({ game }: GameDetailsCardProps) {
  return (
    <div className="game-details__card" data-testid="game-details-card">
      <img
        className="game-details__image"
        src={game?.background_image}
        alt={game?.name}
      ></img>
      <h2 className="game-details__name">{game?.name}</h2>
      <div className="game-details__rate">
        <span>Raiting:</span>
        {game.rating || 'unknown'}
      </div>
      <div className="game-details__web">
        <span>Website:</span>
        <a href={game?.website} target="_blank" rel="noopener noreferrer">
          {game?.website || 'unknown'}
        </a>
      </div>
      <p className="game-details__desc" data-testid="game-details__desc">
        {game?.description_raw}
      </p>
    </div>
  );
}

export default GameDetailsCard;
