import React, { useState, useContext } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const AvailableSlots = (props) => {

    const parentCallback = props.parentCallback;

    const handleClick = () => {
        parentCallback();
    }

    return (
        <div>
            <CardContent sx={{ backgroundColor: '#f9f9f9 !important', margin: '0px 16px' }}>
                <Typography color="text.secondary" sx={{ paddingTop: '20px' }}>
                    Available openings, please select a time to reserve
                </Typography>
                <Stack direction="row" spacing={1} display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: '20px', paddingBottom: '20px' }}
                >
                    <Button size="small" variant="contained" disabled sx={{ minWidth: '15%', textTransform: 'capitalize', }}>Unavailable</Button>
                    <Button onClick={handleClick} size="small" variant="contained" color="success" sx={{ minWidth: '15%', textTransform: 'capitalize', }}>6.00pm</Button>
                    <Button onClick={handleClick} size="small" variant="contained" color="success" sx={{ minWidth: '15%', textTransform: 'capitalize', }}>6.00pm</Button>
                    <Button onClick={handleClick} size="small" variant="contained" color="success" sx={{ minWidth: '15%', textTransform: 'capitalize', }}>6.00pm</Button>
                    <Button onClick={handleClick} size="small" variant="contained" color="success" sx={{ minWidth: '15%', textTransform: 'capitalize', }}>6.00pm</Button>
                </Stack>
            </CardContent>
        </div>
    );

}
