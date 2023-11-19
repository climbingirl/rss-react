import React, { useState } from 'react';
import ErrorBoundaryBtn from '../ErrorBoundary/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../store/gamesSlice/gamesSlice';
import { SearchProps } from './Search.types';
import './Search.scss';

function Search({ searchValue, isGamesLoading }: SearchProps) {
  const [value, setValue] = useState(searchValue);
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setSearchValue(value));
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
        <button className="search__btn" type="submit" disabled={isGamesLoading}>
          Search
        </button>
      </form>
      <ErrorBoundaryBtn />
    </section>
  );
}

export default Search;
