import React from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function TextComponent1() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Текстовая Компонента 1
            </Typography>
            <Typography variant="body1">
                Это первая текстовая компонента.
                <br />
                <Link component={RouterLink} to="/dynamic/1">
                    Динамическое Содержание 1
                </Link>
            </Typography>
        </div>
    );
}

export default TextComponent1;