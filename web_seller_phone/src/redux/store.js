import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/countSlide';
import searchReducer from './slides/searchSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer,
    },
});
