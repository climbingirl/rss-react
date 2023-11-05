import React, { useState } from 'react';
import ErrorBoundaryBtn from '../ErrorBoundary/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

interface SearchProps {
  value: string;
  gamesLoading: boolean;
  searchValueKey: string;
}

function Search({ value, gamesLoading, searchValueKey }: SearchProps) {
  const [params, setParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(value);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    params.set('search', searchValue);
    params.set('page', '1');
    params.delete('details');
    setParams(params);
    localStorage.setItem(searchValueKey, searchValue);
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
