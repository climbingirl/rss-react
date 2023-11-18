import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../router/searchParams';
import { useGetGameQuery } from '../../services/games';
import GameDetailsCard from './GameDetailsCard/GameDetailsCard.tsx';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';
import './GameDetails.scss';

function GameDetails() {
  const [params, setParams] = useSearchParams();
  const gameId = Number(params.get(SEARCH_PARAMS.DETAILS)) || null;
  const gemeDetailsShowClass = gameId ? ' game-details_show' : '';
  const { data: game, isFetching } = useGetGameQuery(gameId ?? skipToken);

  function handleClose() {
    params.delete('details');
    setParams(params);
  }

  return (
    <section className={'game-details' + gemeDetailsShowClass}>
      <div className="game-details__inner">
        {isFetching ? (
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
