import React, { useState } from 'react';
import './search.css';

export const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <span role="img" aria-label="Пошук">&#128269;</span>
      </button>
    </div>
  );
};

