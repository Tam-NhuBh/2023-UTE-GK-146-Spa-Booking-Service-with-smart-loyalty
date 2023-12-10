import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartSlice'; // Import cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your cartSlice reducer here
    // Add other reducers if you have more slices

  },
});

export default store;
