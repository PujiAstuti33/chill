import React, { useState } from "react";

const MovieApp = () => {
  // State untuk menyimpan daftar film
  const [movies, setMovies] = useState([
    { id: 1, title: "Don't Look Up", year: 2021 },
    { id: 2, title: "Blue Lock", year: 2022 },
    { id: 3, title: "The Batman", year: 2022 },
  ]);

  // State untuk menyimpan data form sementara
  const [newMovie, setNewMovie] = useState({ title: "", year: "" });

  // Fungsi untuk menambahkan film baru
  const addMovie = () => {
    const newId = movies.length + 1;
    setMovies([...movies, { id: newId, title: newMovie.title, year: newMovie.year }]);
    setNewMovie({ title: "", year: "" }); // Reset form setelah menambahkan
  };

  // Fungsi untuk menghapus film berdasarkan id
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Fungsi untuk mengupdate film berdasarkan id
  const updateMovie = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, title: newMovie.title, year: newMovie.year }
          : movie
      )
    );
    setNewMovie({ title: "", year: "" }); // Reset form setelah update
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Movie App</h1>

      {/* Form untuk menambahkan atau mengupdate film */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={addMovie} className="bg-blue-500 text-white p-2">
          Add Movie
        </button>
      </div>

      {/* Daftar Film */}
      <ul className="list-disc pl-5">
        {movies.map((movie) => (
          <li key={movie.id} className="mb-2">
            <span className="mr-2">
              {movie.title} ({movie.year})
            </span>
            <button
              onClick={() => deleteMovie(movie.id)}
              className="bg-red-500 text-white p-1 mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => updateMovie(movie.id)}
              className="bg-yellow-500 text-white p-1"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApp;
