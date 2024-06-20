import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import TextComponent1 from './TextComponent1';
import TextComponent2 from './TextComponent2';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<TextComponent1 />} />
                    <Route path="/text2" element={<TextComponent2 />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;