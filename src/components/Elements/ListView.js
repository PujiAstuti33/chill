import React from 'react';
import useFetchData from '../../hooks/useFetchData'; // Sesuaikan path import

const ListView = () => {
  const { data, loading, error } = useFetchData('https://api.example.com/data'); // Sesuaikan URL API

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
