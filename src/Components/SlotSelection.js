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
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SlotSelection = (props) => {

    const [selectedPax, setPax] = useState('2');
    const [selectedDate, setDate] = useState();
    const [selectedtime, setTime] = useState();
    const [slotsData, setSlotsData] = useState([]);

    const [open, setOpen] = useState(false);

    const handleAlertClick = () => {
        setOpen(true);
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const parentCallback = props.parentCallback;

    const { name, address, date } = useAPI();

    const [slots, setSlots] = useState([]);
    const [showSlots, setShowSlots] = useState(false);


    async function fetchData(pax, date, time) {
        const { data } = await axios.get(
            'https://api.eat-sandbox.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453/time_slots?desired_time_and_date=' + date + 'T' + time + '&covers=' + pax + ''
        );
        if (data) {
            setSlotsData(data.data);
            setShowSlots(true);
        }
    }

    const handleChange = (selecteddate) => {
        setDate(selecteddate);
        let slots = date[selecteddate];
        setSlots(slots);
    };

    const handleClick = () => {
        if (selectedDate !== undefined && selectedtime !== undefined) {
            fetchData(selectedPax, selectedDate, selectedtime);
        } else {
            handleAlertClick();
        }

    };

    const handleUser = () => {
        localStorage.setItem("selectedDate", selectedDate);
        localStorage.setItem("selectedPax", selectedPax);
        parentCallback();
    }

    const handlePax = (pax) => {
        setPax(pax);
    };

    const handleTime = (time) => {
        setTime(time);
    };

    let selectedSlots = "";
    if (showSlots) {
        selectedSlots = <AvailableSlots parentCallback={handleUser} slots={slotsData} />
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
                        <PaxSelection parentCallback={handlePax} />
                        <DateSelection parentCallback={handleChange} data={Object.keys(date)} />
                        <TimeSelection parentCallback={handleTime} data={slots} />
                        <Button onClick={handleClick} variant="contained" color="success" sx={{ marginTop: '32px', minWidth: '25%', textTransform: 'capitalize', }}>Search</Button>
                    </Stack>
                </CardContent>
                {selectedSlots}
            </Card>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', marginRight: '22%', marginTop: '10px' }}>
                Powered by <img alt="Eat App" title="Eat App" src="https://eatapp.co/packs/media/images/eat-logo-41821f7046d6114ef6f78a3a78065410.svg"></img>
            </Typography>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                    Please select Date and Time to get Available Slots.
                </Alert>
            </Snackbar>
        </div>
    );

}
