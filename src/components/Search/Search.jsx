import React from 'react';
import './Search.css';

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <section className="search">
      <input className="search__input" type="text" placeholder="Search" value={search} onChange={handleSearch} ref={searchInput} />
    </section>
  );
}

export default Search;
