
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Import reducer dari dataSlice

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;


