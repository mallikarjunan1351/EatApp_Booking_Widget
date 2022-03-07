import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAPI } from './../Context/SlotContext';

import { PaxSelection } from './PaxSelection';
import { DateSelection } from './DateSelection';
import { TimeSelection } from './TimeSelection';
import { AvailableSlots } from './AvailableSlots';


export const SlotSelection = (props) => {


    const parentCallback = props.parentCallback;

    const { name, address, date } = useAPI();

    const [slots, setSlots] = useState([]);
    const [showSlots, setShowSlots] = useState(false);

    const handleChange = (selecteddate) => {
        let slots = date[selecteddate];
        setSlots(slots);
    };

    const handleClick = () => {
        setShowSlots(true);
    };

    const handleUser = () => {
        parentCallback();
    }

    let availableSlots = "";
    if (showSlots) {
        availableSlots = <AvailableSlots parentCallback={handleUser} />
    }

    return (
        <div>
            <Card sx={{ maxWidth: '50%', margin: 'auto', marginTop: '50px', padding: '50px' }}>
                <CardContent sx={{ padding: '0px 16px' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                        {address}
                    </Typography>
                    <Stack direction="row" spacing={0}>
                        <PaxSelection />
                        <DateSelection parentCallback={handleChange} data={Object.keys(date)} />
                        <TimeSelection data={slots} />
                        <Button onClick={handleClick} variant="contained" color="success" sx={{ marginTop: '32px', minWidth: '25%', textTransform: 'capitalize', }}>Search</Button>
                    </Stack>
                </CardContent>
                {availableSlots}
            </Card>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', marginRight: '22%', marginTop: '10px' }}>
                Powered by <img alt="Eat App" title="Eat App" src="https://eatapp.co/packs/media/images/eat-logo-41821f7046d6114ef6f78a3a78065410.svg"></img>
            </Typography>
        </div>
    );

}
