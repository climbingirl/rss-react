import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../router/searchParams';
import { useGetGameQuery } from '../../services/games';
import GameDetailsCard from './GameDetailsCard/GameDetailsCard.tsx';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';
import { useAppSelector } from '../../hooks/redux';
import './GameDetails.scss';

function GameDetails() {
  const { isGameDetailsLoading } = useAppSelector((state) => state.games);
  const [params, setParams] = useSearchParams();
  const gameId = Number(params.get(SEARCH_PARAMS.DETAILS)) || null;
  const gemeDetailsShowClass = gameId ? ' game-details_show' : '';
  const { data: game } = useGetGameQuery(gameId ?? skipToken);

  function handleClose() {
    params.delete('details');
    setParams(params);
  }

  return (
    <section className={'game-details' + gemeDetailsShowClass}>
      <div className="game-details__inner">
        {isGameDetailsLoading ? (
          <Loader />
        ) : !game ? (
          <div className="game-details__empty">Nothing found!</div>
        ) : (
          <GameDetailsCard game={game} />
        )}
        <button className="game-details__close-btn" onClick={handleClose}>
          ✕
        </button>
      </div>
    </section>
  );
}

export default GameDetails;
