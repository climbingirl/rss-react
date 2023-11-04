import { GameModel } from '../../../api/models';
import './GameCard.scss';

interface GameCardProps {
  game: GameModel;
}

function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card">
      <img className="game-card__img" src={game.image}></img>
      <div className="game-card__info">
        <div className="game-card__name">{game.name}</div>
      </div>
    </div>
  );
}

export default GameCard;
