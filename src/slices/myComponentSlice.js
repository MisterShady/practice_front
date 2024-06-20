import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const myComponentSlice = createSlice({
    name: 'myComponent',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = myComponentSlice.actions;
export default myComponentSlice.reducer;