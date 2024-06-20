import React from 'react';
import { Typography } from '@mui/material';

function TextComponent2() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Текстовая Компонента 2
            </Typography>
            <Typography variant="body1">
                Это вторая текстовая компонента.
            </Typography>
        </div>
    );
}

export default TextComponent2;