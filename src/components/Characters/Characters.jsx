import React, { useState, useEffect } from 'react';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <main className="characters">
      {characters.map(character => (
        <div className="character">
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
        </div>
      ))}
    </main>
  );
}

export default Characters;
