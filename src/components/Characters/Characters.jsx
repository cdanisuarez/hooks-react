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
          <h2>{character.name}</h2>
        </div>
      ))}
    </main>
  );
}

export default Characters;
