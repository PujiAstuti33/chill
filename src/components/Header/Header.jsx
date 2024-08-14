import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center p-4 justify-between">
        {/* Flex container for left-aligned items */}
        <div className="flex items-center flex-grow-0">
          <img
            src="/images/icon-movie.png"
            alt="Chill Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-2xl font-bold mr-8">Chill</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Series</Link>
            </li>
            <li>
              <Link to="/film">Film</Link>
            </li>
            <li>
              <Link to="/daftarsaya">Daftar Saya</Link>
            </li>
          </ul>
        </div>

        {/* Profile icon */}
        <div className="flex-grow-0">
          <Link to="/profile">
            <img
              src="/images/icon-profile.png" // Ganti dengan path gambar yang sesuai
              alt="icon-Profile"
              className="w-8 h-8" // Sesuaikan ukuran gambar sesuai kebutuhan
            />
          </Link>
        </div>
      </div>

      {/* Section for Background Image and Overlay Content */}
      <div className="relative">
        <img
          src="/images/duty-after-school.png" // Ganti dengan path gambar yang sesuai
          alt="Duty After School"
          className="w-full h-auto object-contain brightness-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-4">Duty After School</h2>
          <p className="mb-4 max-w-xl">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
              Mulai
            </button>
            <button className="bg-gray-600 text-white py-2 px-4 rounded-full">
              Selengkapnya
            </button>
            <button className="bg-gray-600 text-white py-2 px-4 rounded-full">
              18+
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
