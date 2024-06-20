import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Menu from './components/Menu';
import TextComponent1 from './components/TextComponent1';
import TextComponent2 from './components/TextComponent2';
import DynamicContent from './components/DynamicContent';

function App() {
    return (
        <Router>
            <CssBaseline />
            <Menu />
            <Container>
                <Routes>
                    <Route path="/" element={<TextComponent1 />} />
                    <Route path="/content" element={<TextComponent2 />} />
                    <Route path="/dynamic/:info" element={<DynamicContent />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;