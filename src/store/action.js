import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './dataSlice';

// Thunk untuk mengambil data
export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get('https://api.example.com/data');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

// Thunks untuk operasi CRUD lainnya (add, edit, delete) bisa ditambahkan di sini
