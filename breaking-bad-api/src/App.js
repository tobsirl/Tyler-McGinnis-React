import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/ui/Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters`);
      const result = await response.json();
      setCharacters(result)
    };
    fetchCharacters()
  }, []);

  console.log(characters);
  return (
    
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
