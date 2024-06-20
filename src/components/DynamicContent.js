import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

function DynamicContent() {
    const { info } = useParams();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Динамическое Содержание
            </Typography>
            <Typography variant="body1">
                Информация: {info}
            </Typography>
        </div>
    );
}

export default DynamicContent;