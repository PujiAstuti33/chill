import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create a slice of the state
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

// Export reducer
export default dataSlice.reducer;
