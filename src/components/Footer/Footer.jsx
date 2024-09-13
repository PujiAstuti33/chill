// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16 flex-1">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-2">Genre</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
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
                        <h2 className="text-lg font-semibold mb-2">Bantuan</h2>
                        <ul className="space-y-1 text-sm">
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                            <li><Link to="/kontak-kami" className="hover:underline">Kontak Kami</Link></li>
                            <li><Link to="/privasi" className="hover:underline">Privasi</Link></li>
                            <li><Link to="/syarat-ketentuan" className="hover:underline">Syarat dan Ketentuan</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-start mb-4 lg:mb-0 lg:ml-0">
                    <img src="/images/icon-movie.png" alt="Chill Logo" className="w-10 h-10 mr-2" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-bold">Chill</h1>
                        <p className="text-sm mt-1">&copy; 2024 Chill. All rights reserved. Puji Astuti</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
