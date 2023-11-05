import PaginationPages from './PaginationPages/PaginationPages';
import PaginationSize from './PaginationSize/PaginationSize';
import './Pagination.scss';

function Pagination() {
  return (
    <div className="pagination">
      <PaginationPages />
      <PaginationSize />
    </div>
  );
}

export default Pagination;
