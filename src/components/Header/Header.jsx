// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex items-center">
                <img 
                src="/images/icon-movie.png" 
                alt="Chill Logo" 
                className="w-12 h-12 mr-4" 
                />
                    <h1 className="text-2xl font-bold mr-8">Chill</h1>
                    <ul className="flex space-x-4 ml-auto">
                        <li><Link to="/">Series</Link></li>
                        <li><Link to="/film">Film</Link></li>
                        <li><Link to="/daftarsaya">Daftar Saya</Link></li>
                        <li><Link to="/daftarsaya">Profile</Link></li>
                    </ul>
            </div>
        </nav>

    );
};

export default Header;
