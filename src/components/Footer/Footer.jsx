// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-gray-800 text-white pb-10">
            {/* Bagian Logo dan Teks */}
            <div className="flex items-start mb-4 lg:mb-0">
                <img src="/images/icon-movie.png" alt="Chill Logo" className="w-12 h-12 mr-2" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold">Chill</h1>
                    <p className="text-sm mt-1">&copy; 2024 Chill. All rights reserved. Puji Astuti</p>
                </div>
            </div>
            {/* Bagian Genre dan Bantuan */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Genre</h2>
                    <div className="flex flex-wrap space-x-4 mt-2">
                        <div className="flex flex-col space-y-1 text-sm list-none">
                            <li>Aksi</li>
                            <li>Anak-anak</li>
                            <li>Anime</li>
                            <li>Britania</li>
                        </div>
                        <div className="flex flex-col space-y-1 text-sm list-none">
                            <li>Drama</li>
                            <li>Fantasi Ilmiah dan Fantasi</li>
                            <li>Kejahatan</li>
                            <li>KDrama</li>
                        </div>
                        <div className="flex flex-col space-y-1 text-sm list-none">
                            <li>Komedi</li>
                            <li>Petualangan</li>
                            <li>Perang</li>
                            <li>Romantis</li>
                        </div>
                        <div className="flex flex-col space-y-1 text-sm list-none">
                            <li>Sains dan Alam</li>
                            <li>Thriller</li>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Bantuan</h2>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/kontak-kami">Kontak Kami</Link></li>
                        <li><Link to="/privasi">Privasi</Link></li>
                        <li><Link to="/syarat-ketentuan">Syarat dan Ketentuan</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;