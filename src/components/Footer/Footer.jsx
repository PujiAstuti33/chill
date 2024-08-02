// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="flex justify-between items-start p-4 bg-gray-800 text-white pb-20">
        <div className="flex items-center mr-8">
        <img src="/images/icon-movie.png" alt="Chill Logo" className="w-12 h-12 mr-2" />
        <div className="flex flex-col">           
          <h1 className="text-xl font-bold">Chill</h1>
          <p className="text-sm mt-1">&copy; 2024 Chill. All rights reserved.Puji Astuti</p>
        </div>
        
        <div className="flex-grow flex space-x-8">
        <div className="flex flex-col ml-8">
          <h2 className="text-lg font-semibold">Genre</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
          </ul>
        </div>        
        <div className="flex flex-col">
          <ul className="mt-8 space-y-1 text-sm">
            <li>Drama</li>
            <li>Fantasi Ilmiah dan Fantasi</li>
            <li>Kejahatan</li>
            <li>KDrama</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="mt-8 space-y-1 text-sm">
            <li>Komedi</li>
            <li>Petualangan</li>
            <li>Perang</li>
            <li>Romantis</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="mt-8 space-y-1 text-sm">
            <li>Sains dan Alam</li>
            <li>Thriller</li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Bantuan</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat dan Ketentuan</li>
          </ul>
        </div>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;