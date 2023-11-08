import { useContext } from 'react';
import { GamesContext } from '../../App/AppContext';
import { useSearchParams } from 'react-router-dom';
import './PaginationSize.scss';

function PaginationSize() {
  const [params, setParams] = useSearchParams();
  const { pageSize, setPageSize } = useContext(GamesContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let selectedSize = Number(e.target.value);
    if (selectedSize < 10) selectedSize = 10;
    if (selectedSize > 100) selectedSize = 100;
    setPageSize(selectedSize);
    params.set('page', '1');
    params.delete('details');
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
