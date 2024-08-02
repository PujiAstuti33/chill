import React from 'react';
import CardBeranda from './CardBeranda';
import MelanjutkanTontonFilm from './MelanjutkanTontonFilm';
import Navbar from './Navbar';

const App = () => {
  const handleClick = (index) => {
    console.log(`Film dengan indeks ${index} diklik`);
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <CardBeranda>
          <CardBeranda.Header image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KgcRxvZ86XCjy7lXrotV6HJjlI.jpg" />
          <CardBeranda.Body name="Duty After School">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
            dalam perang.
          </CardBeranda.Body>
          <CardBeranda.Footer>
            <div className="buttons flex space-x-4">
              <button className="button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => handleClick(0)}>
                Mulai
              </button>
              <button className="button bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded" onClick={() => handleClick(0)}>
                Selengkapnya
              </button>
              <div className="age-rating text-lg font-semibold text-red-600">18+</div>
            </div>
          </CardBeranda.Footer>
        </CardBeranda>
        <MelanjutkanTontonFilm />
      </div>
    </div>
  );
};

export default App;
