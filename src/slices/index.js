import { configureStore } from '@reduxjs/toolkit';
import myComponentReducer from './myComponentSlice';

export const store = configureStore({
    reducer: {
        myComponent: myComponentReducer,
    },
});