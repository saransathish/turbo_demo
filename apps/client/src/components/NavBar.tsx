// src/components/NavBar.tsx
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './NavBar.css';
import Logo from '../assets/glass1.png';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="GlassDoor" />
            </div>
            <div className="navbar-center">
                <a href="#community">Community</a>
                <a href="#jobs">Jobs</a>
                <a href="#companies">Companies</a>
                <a href="#salaries">Salaries</a>
            </div>
            <div className="navbar-right">
                <FaSearch className="icon" />
                <FaBell className="icon" />
                <FaUserCircle className="icon" />
            </div>
        </nav>
    );
}

export default NavBar;