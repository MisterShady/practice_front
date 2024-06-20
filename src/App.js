import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './slices/myComponentSlice';
import './App.css';

const MyComponent = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.myComponent.value);

    return (
        <div className="container">
            <h1>Value: {value}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default MyComponent;