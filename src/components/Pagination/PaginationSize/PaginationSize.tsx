import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setPageSize } from '../../../store/gamesSlice/gamesSlice';
import './PaginationSize.scss';

function PaginationSize() {
  const [params, setParams] = useSearchParams();
  const pageSize = useAppSelector((state) => state.games.pageSize);
  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let selectedSize = Number(e.target.value);
    if (selectedSize < 10) selectedSize = 10;
    if (selectedSize > 100) selectedSize = 100;
    dispatch(setPageSize(selectedSize));
    params.delete(SEARCH_PARAMS.PAGE);
    params.delete(SEARCH_PARAMS.DETAILS);
    setParams(params);
  }

  return (
    <div className="pagination__size">
      <label className="pagination__size_label" htmlFor="page-size">
        Games per page:
      </label>
      <input
        className="pagination__size_input"
        id="page-size"
        type="number"
        value={pageSize}
        onChange={handleChange}
        step="10"
        required
      />
    </div>
  );
}

export default PaginationSize;
