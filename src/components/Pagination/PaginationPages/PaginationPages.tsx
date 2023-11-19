import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import { useAppSelector } from '../../../hooks/redux';
import { PaginationPagesProps } from './PaginationPages.types';
import './PaginationPages.scss';

function PaginationPages({ gamesCount }: PaginationPagesProps) {
  const pageSize = useAppSelector((state) => state.games.pageSize);
  const [params, setParams] = useSearchParams();
  const page = Number(params.get(SEARCH_PARAMS.PAGE)) || 1;
  const pagesCount = Math.round(gamesCount / pageSize);

  function handleClick(e: React.MouseEvent) {
    const selectedPage = e.currentTarget.getAttribute('data-page') || '1';
    if (selectedPage === '1') {
      params.delete(SEARCH_PARAMS.PAGE);
    } else {
      params.set(SEARCH_PARAMS.PAGE, selectedPage);
    }
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
        data-testid="next-page"
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
