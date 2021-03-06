import React, { useState, useReducer, useMemo, useRef } from 'react';
import { INITIAL_STATE, ACTIONS, favoriteReducer } from '../../reducer/FavoritesReducer';
import Search from '../Search/Search';
import useCharacters from '../../hooks/useCharacters';
import './Characters.css';

const Characters = () => {
  // const [characters, setCharacters] = useState([]);
  const characters = useCharacters('https://rickandmortyapi.com/api/character/');
  const [search, setSearch] = useState('');
  const [favorites, dispatchFavorites] = useReducer(favoriteReducer, INITIAL_STATE);
  const searchInput = useRef(null);

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
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

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
