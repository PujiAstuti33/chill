// src/components/elements/MyComponentWithReducer.js
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { dataReducer, initialState } from '../../store/dataReducer';

const MyComponentWithReducer = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await axios.get('https://api.example.com/data');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error });
      }
    };

    fetchData();
  }, []);

  const { data, loading, error } = state;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API with Reducer:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponentWithReducer;
