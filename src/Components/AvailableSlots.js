import React, { useState, useContext } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const AvailableSlots = (props) => {

    const parentCallback = props.parentCallback;
    const slots = props.slots;

    const handleSlotClick = (event) => {
        localStorage.setItem("selectedSlot", event.target.value);
        parentCallback();
    }

    const availableSlots = slots.map((slot, i) =>
        (slot.attributes.available) ?
            <Button key={i} onClick={handleSlotClick} value={slot.attributes.label.toString()} size="small" variant="contained" color="success" sx={{ minWidth: '15%', textTransform: 'capitalize', }}>{slot.attributes.label.toString()}</Button>
            :
            <Button key={i} size="small" variant="contained" disabled sx={{ minWidth: '15%', textTransform: 'capitalize', }}>Unavailable</Button>

    );

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
                    {availableSlots}
                </Stack>
            </CardContent>
        </div>
    );

}
