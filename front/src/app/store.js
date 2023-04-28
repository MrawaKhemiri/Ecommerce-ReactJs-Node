import { configureStore } from '@reduxjs/toolkit';
import userSessionSlice from'../features/session/userSessionSlice'
import  CartSlice  from '../features/card/CardSlice';
import carts from '../features/card/CardSlice';
export const store = configureStore({
  reducer: {
    userSession: userSessionSlice,
    carts: CartSlice
  },

});