import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [DaftarSaya, setDaftarSaya] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDaftarSaya = JSON.parse(localStorage.getItem("DaftarSaya")) || [];
    setDaftarSaya(storedDaftarSaya);
  }, []);

  useEffect(() => {
    localStorage.setItem("DaftarSaya", JSON.stringify(DaftarSaya));
  }, [DaftarSaya]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };

  const handleAddToDaftarSaya = (id) => {
    setDaftarSaya((prevDaftarSaya) => {
      const existingItem = prevDaftarSaya.find((item) => item.id === id);
      if (existingItem) {
        return prevDaftarSaya.map((item) =>
          item.id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
        );
      } else {
        return [...prevDaftarSaya, { id, qty: 1 }];
      }
    });
  };

  const handleRemoveFromDaftarSaya = (id) => {
    setDaftarSaya((prevDaftarSaya) =>
      prevDaftarSaya.filter((item) => item.id !== id)
    );
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="w-full mx-auto flex items-center p-2 md:p-4 justify-between">
        <div className="flex items-center flex-grow-0">
          <img
            src="/images/icon-movie.png"
            alt="Chill Logo"
            className="w-12 h-12 md:w-16 md:h-16 mr-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold mr-8">Chill</h1>
          <ul className="flex space-x-4 text-sm md:text-base">
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

        <div className="flex-grow-0">
          <Link to="/profile">
            <img
              src="/images/icon-profile.png"
              alt="Profile Icon"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </Link>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/duty-after-school.png"
          alt="Duty After School"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col text-left px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 lg:mb-6 mt-auto">
            Duty After School
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 max-w-xs md:max-w-sm lg:max-w-md">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-blue-600 text-white py-1 px-3 rounded-full text-xs md:text-base">
              Mulai
            </button>
            <button className="bg-gray-600 text-white py-1 px-3 rounded-full text-xs md:text-base">
              Selengkapnya
            </button>
            <button className="bg-gray-600 bg-opacity-70 text-white py-1 px-3 rounded-full text-xs md:text-base">
              18+
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {DaftarSaya.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span>Item ID: {item.id}, Quantity: {item.qty}</span>
              <button
                onClick={() => handleRemoveFromDaftarSaya(item.id)}
                className="bg-red-600 text-white py-1 px-4 rounded text-sm"
                aria-label={`Remove item with ID ${item.id}`}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
