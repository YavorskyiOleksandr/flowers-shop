import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/reducer'
import seedlingReducer from './store/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    seedling: seedlingReducer
  }
})
