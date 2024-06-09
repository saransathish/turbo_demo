// src/components/SearchBar.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
        </div>
    );
}

export default SearchBar;