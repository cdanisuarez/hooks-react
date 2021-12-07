import React, { useState, useEffect, useReducer } from 'react';
import { INITIAL_STATE, ACTIONS, favoriteReducer } from '../../reducer/FavoritesReducer';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatchFavorites] = useReducer(favoriteReducer, INITIAL_STATE);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatchFavorites({ type: ACTIONS.add, payload: favorite });
  };

  return (
    <main>
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
        {characters.map(character => (
          <div className="character" key={character.id}>
            <img className="character__image" src={character.image} />
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
            <button className="character__fav" type="button" onClick={() => handleClick(character)}>
              Add to favorites
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Characters;
