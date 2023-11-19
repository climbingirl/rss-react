import PaginationPages from './PaginationPages/PaginationPages';
import PaginationSize from './PaginationSize/PaginationSize';
import './Pagination.scss';
import { PaginationProps } from './Pagination.types';

function Pagination({ gamesCount }: PaginationProps) {
  return (
    <div className="pagination">
      <PaginationPages gamesCount={gamesCount} />
      <PaginationSize />
    </div>
  );
}

export default Pagination;
