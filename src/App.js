// App.js

import React, { useState, useEffect } from 'react';
import { getAllCharacters, getPeopleCount } from './api';
import './App.css';

function App() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCharacters();
    }, [currentPage]);

    useEffect(() => {
        fetchTotalPages();
    }, []);

    const fetchCharacters = async () => {
        try {
            const data = await getAllCharacters(currentPage);
            setCharacters(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchTotalPages = async () => {
      try {
          const count = await getPeopleCount(); // Chame a função getPeopleCount para obter o número total de personagens
          const totalPagesCount = Math.ceil(count / 10); // Assumindo que cada página mostra 10 personagens
          setTotalPages(totalPagesCount);
          setError(null);
      } catch (error) {
          setError(error.message);
      }
  };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div className="container">
            <h1>Lista de Personagens Star Wars</h1>
            {error && <p className="error">{error}</p>}
            <div className="list-container">
                <ul>
                    {characters.map(character => (
                        <li key={character.name}>{character.name}</li>
                    ))}
                </ul>
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
                    Página Anterior
                </button>
                <span className="page-number">Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination-button">
                    Próxima Página
                </button>
            </div>
        </div>
    );
}

export default App;
