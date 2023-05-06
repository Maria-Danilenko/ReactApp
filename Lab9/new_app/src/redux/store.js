import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import authSlice from './reducers/authSlice';

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;