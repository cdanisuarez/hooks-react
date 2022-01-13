import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react';
import { INITIAL_STATE, ACTIONS, favoriteReducer } from '../../reducer/FavoritesReducer';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, dispatchFavorites] = useReducer(favoriteReducer, INITIAL_STATE);
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = useMemo(() =>
    characters.filter(({ name }) => name.toLowerCase().includes(search.toLocaleLowerCase())),
    [characters, search],
  );
  const isInFavorites = (favorite) => favorites.favorites.includes(favorite);
  const handleAddToFavs = (favorite) => dispatchFavorites({ type: ACTIONS.add, payload: favorite });
  const handleRemoveFromFavs = (favorite) => dispatchFavorites({ type: ACTIONS.remove, payload: favorite });
  const handleSearch = () => setSearch(searchInput.current.value);

  return (
    <main>
      <section className="search">
        <input className="search__input" type="text" placeholder="Search" onChange={handleSearch} ref={searchInput} />
      </section>

      <section className="favorites">
        {
          favorites.favorites.length > 0 && <h2 className="favorites__title">Favorites: </h2>
        }
        {favorites.favorites.map(fav => (
          <div className="favorite" key={fav.id}>
            <span className="favorite__name">{fav.name}</span>
          </div>
        ))}
      </section>

      <section className="characters">
        {filteredCharacters.map(character => (
          <div className="character" key={character.id}>
            <img className="character__image" src={character.image} alt={character.name} />
            <h2 className="character__name">{character.name}</h2>
            <ul className="character__details">
              <li className="character__details-item">
                <span className="details-item__title">Status: </span>
                <span className="details-item__value">{character.status}</span>
              </li>

              <li className="character__details-item">
                <span className="details-item__title">Gender: </span>
                <span className="details-item__value">{character.gender}</span>
              </li>

              <li className="character__details-item">
                <span className="details-item__title">Species: </span>
                <span className="details-item__value">{character.species}</span>
              </li>
            </ul>
            <div className="character__details-actions">
              {
                !isInFavorites(character)
                  ? <button className="details-actions__fav" type="button" onClick={() => handleAddToFavs(character)}>
                    Add to favorites
                  </button>
                  : <button className="details-actions__fav" type="button" onClick={() => handleRemoveFromFavs(character)}>
                    Remove from favorites
                  </button>
              }
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Characters;
