import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import './PaginationPages.scss';

function PaginationPages() {
  const { gamesCount, pageSize } = useContext(AppContext);
  const [params, setParams] = useSearchParams();
  const page = Number(params.get(SEARCH_PARAMS.PAGE)) || 1;
  const pagesCount = Math.round(gamesCount / pageSize);

  function handleClick(e: React.MouseEvent) {
    const selectedPage = e.currentTarget.getAttribute('data-page') || '1';
    params.set(SEARCH_PARAMS.PAGE, selectedPage);
    params.delete(SEARCH_PARAMS.DETAILS);
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
