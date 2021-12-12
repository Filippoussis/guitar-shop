import { configureStore } from '@reduxjs/toolkit';
import guitarsReducer from './slices/guitars';
import cartReducer from './slices/cart';

const store = configureStore({
  reducer: {
    guitars: guitarsReducer,
    cart: cartReducer,
  },
});

export {store};
