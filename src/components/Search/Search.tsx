import React, { useState } from 'react';
import ErrorBoundaryBtn from '../ErrorBoundary/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_VALUE_KEY } from '../App/App';
import './Search.scss';

interface SearchProps {
  gamesLoading: boolean;
}

function Search({ gamesLoading }: SearchProps) {
  const [params, setParams] = useSearchParams();
  const search = params.get('search') || '';
  const [searchValue, setSearchValue] = useState(search);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    params.set('search', searchValue);
    params.set('page', '1');
    params.delete('details');
    setParams(params);
    localStorage.setItem(SEARCH_VALUE_KEY, searchValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <section className="search">
      <form className="search__form" role="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          value={searchValue}
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
