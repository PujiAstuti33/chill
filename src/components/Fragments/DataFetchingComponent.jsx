import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mengambil data dari API
    axios.get('/movie/popular?api_key=YOUR_API_KEY')
      .then(response => {
        setData(response.data.results); // Sesuaikan dengan struktur respons API
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Menampilkan status loading atau error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Menampilkan data yang diterima
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li> // Sesuaikan dengan struktur data
      ))}
    </ul>
  );
};

export default DataFetchingComponent;
