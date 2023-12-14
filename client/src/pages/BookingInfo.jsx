// BookingInfo.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const BookingInfo = ({ label, value }) => (
    <Box my={1}>
        <Typography variant="subtitle2">
            <strong>{label}:</strong>{" "}
            <span style={{
                backgroundColor: '#ffecb3', // Use your preferred highlight color
                padding: '2px 4px',
                borderRadius: '4px',
                fontWeight: 'bold',
                float: 'right', // Align to the right corner
            }}>{value}</span>
        </Typography>
    </Box>
);

export default BookingInfo;
