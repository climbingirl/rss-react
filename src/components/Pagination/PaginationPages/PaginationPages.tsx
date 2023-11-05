import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GamesContext } from '../../App/AppContext';
import './PaginationPages.scss';

function PaginationPages() {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page')) || 1;
  const pageSize = Number(params.get('page-size')) || 20;
  const { gamesCount } = useContext(GamesContext);
  const pagesCount = Math.trunc(gamesCount / Number(pageSize));

  function handleClick(e: React.MouseEvent) {
    const selectedPage = e.currentTarget.getAttribute('data-page') || '1';
    params.set('page', selectedPage);
    params.delete('details');
    setParams(params);
  }

  return (
    <div className="pagination__pages">
      <button
        className="pagination__btn"
        data-page="1"
        onClick={handleClick}
        disabled={page <= 2}
      >
        &laquo;
      </button>
      <button
        className="pagination__btn"
        data-page={page - 1}
        onClick={handleClick}
        disabled={page <= 1}
      >
        &lsaquo;
      </button>
      <button className="pagination__btn pagination__btn_current">
        {page}
      </button>
      <button
        className="pagination__btn"
        data-page={page + 1}
        onClick={handleClick}
        disabled={page >= pagesCount}
      >
        &rsaquo;
      </button>
      <button
        className="pagination__btn"
        data-page={pagesCount}
        onClick={handleClick}
        disabled={page >= pagesCount - 1}
      >
        &raquo;
      </button>
    </div>
  );
}

export default PaginationPages;
