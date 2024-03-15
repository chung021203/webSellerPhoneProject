import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/countSlide'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})