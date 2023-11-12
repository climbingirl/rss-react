import { useSearchParams } from 'react-router-dom';
import { GameModel } from '../../../types/models';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import './GameCard.scss';

interface GameCardProps {
  game: GameModel;
}

function GameCard({ game }: GameCardProps) {
  const [params, setParams] = useSearchParams();

  function handleClick() {
    params.set(SEARCH_PARAMS.DETAILS, String(game?.id));
    setParams(params);
  }

  return (
    <div className="game-card" onClick={handleClick} data-testid="game-card">
      <img className="game-card__img" src={game?.image} alt={game?.name}></img>
      <div className="game-card__info">
        <div className="game-card__name" data-testid="game-name">
          {game?.name}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
