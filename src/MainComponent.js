import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

const MainComponent = () => {
    const { user } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <h2>Current Theme</h2>
            <p>Theme: {theme}</p>
        </div>
    );
};

export default MainComponent;