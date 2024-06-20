import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Menu() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Навигация
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Главная
                </Button>
                <Button color="inherit" component={RouterLink} to="/content">
                    Контент
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;