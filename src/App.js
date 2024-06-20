import React from 'react';
import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
import MainComponent from './MainComponent';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const App = () => {
    return (
        <UserProvider>
            <ThemeProvider>
                <div>
                    <MainComponent />
                    <FirstComponent />
                    <SecondComponent />
                </div>
            </ThemeProvider>
        </UserProvider>
    );
};

export default App;