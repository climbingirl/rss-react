import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import { GameCardProps } from './GameCard.types';
import './GameCard.scss';

function GameCard({ game }: GameCardProps) {
  const [params, setParams] = useSearchParams();

  function handleClick() {
    params.set(SEARCH_PARAMS.DETAILS, String(game?.id));
    setParams(params);
  }

  return (
    <div className="game-card" onClick={handleClick} data-testid="game-card">
      <img
        className="game-card__img"
        src={game?.background_image}
        alt={game?.name}
      ></img>
      <div className="game-card__info">
        <div className="game-card__name" data-testid="game-name">
          {game?.name}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
