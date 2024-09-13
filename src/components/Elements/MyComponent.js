// src/components/elements/MyComponent.js
import React from 'react';
import useFetchData from '../../hooks/useFetchData';

const MyComponent = () => {
  const { data, loading, error } = useFetchData('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
