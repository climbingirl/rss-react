import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { gamesAPI } from '../../api/api';
import { GameDetailsModel } from '../../types/models';
import { SEARCH_PARAMS } from '../../router/searchParams';
import './GameDetails.scss';

function GameDetails() {
  const [params, setParams] = useSearchParams();
  const gameId = Number(params.get(SEARCH_PARAMS.DETAILS)) || null;
  const [game, setGame] = useState<GameDetailsModel | null>(null);
  const [loading, setLoading] = useState(false);
  const gemeDetailsShowClass = gameId ? ' game-details_show' : '';

  useEffect(() => {
    loadGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  async function loadGame() {
    if (!gameId) return;
    setLoading(true);
    try {
      const game = await gamesAPI.getGame(gameId);
      setGame(game);
    } catch {
      setGame(null);
    }
    setLoading(false);
  }

  function handleClose() {
    params.delete('details');
    setParams(params);
  }

  return (
    <section className={'game-details' + gemeDetailsShowClass}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="game-details__inner">
            {!game ? (
              <div className="game-details__empty">Nothing found!</div>
            ) : (
              <div className="game-details__content">
                <img className="game-details__image" src={game?.image}></img>
                <h2 className="game-details__name">{game?.name}</h2>
                <div className="game-details__rate">
                  <span>Raiting:</span>
                  {game?.rating}
                </div>
                <div className="game-details__web">
                  <span>Website:</span>
                  <a
                    href={game?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {game?.website}
                  </a>
                </div>
                <p className="game-details__desc">{game?.description}</p>
              </div>
            )}
            <button className="game-details__close-btn" onClick={handleClose}>
              ✕
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default GameDetails;
