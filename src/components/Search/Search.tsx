import React, { useContext, useState } from 'react';
import ErrorBoundaryBtn from '../ErrorBoundary/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { SEARCH_VALUE_KEY } from '../../global-vars';
import { SEARCH_PARAMS } from '../../router/searchParams';
import './Search.scss';

interface SearchProps {
  gamesLoading: boolean;
}

function Search({ gamesLoading }: SearchProps) {
  const [params, setParams] = useSearchParams();
  const { searchValue } = useContext(AppContext);
  const [value, setValue] = useState(searchValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    params.set(SEARCH_PARAMS.SEARCH, value);
    params.set(SEARCH_PARAMS.PAGE, '1');
    params.delete(SEARCH_PARAMS.DETAILS);
    setParams(params);
    localStorage.setItem(SEARCH_VALUE_KEY, value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <section className="search">
      <form className="search__form" role="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          value={value}
          placeholder="Search game"
          type="text"
          onChange={handleChange}
        />
        <button className="search__btn" type="submit" disabled={gamesLoading}>
          Search
        </button>
      </form>
      <ErrorBoundaryBtn />
    </section>
  );
}

export default Search;
