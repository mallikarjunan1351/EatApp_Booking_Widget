import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAPI } from './../Context/SlotContext';

const INITIAL_FORM_STATE = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    request: '',
}

const FORM_VALIDATION = Yup.object().shape({
    firstname: Yup.string()
        .required('Field is required'),
    lastname: Yup.string()
        .required('Field is required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number'),
    email: Yup.string()
        .email('Invalid email address format.'),
    request: Yup.string()
        .required('Field is required'),
});

export const UserInfo = (props) => {

    const parentCallback = props.parentCallback;

    const [pax, setPax] = useState('');
    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');
    const [code, setCode] = useState('');

    const { name, address } = useAPI();

    useEffect(() => {
        setDate(localStorage.getItem("selectedDate"));
        setSlot(localStorage.getItem("selectedSlot"));
        setPax(localStorage.getItem("selectedPax"));
    }, []);

    const handleClick = () => {
        parentCallback();
    }

    const handleChange = (event) => {
        setCode(event.target.value);
    }

    return (
        <div>
            <Card sx={{ maxWidth: '50%', margin: 'auto', marginTop: '50px', padding: '50px' }}>
                <CardContent sx={{ padding: '0px 16px' }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                        >
                            <Form>
                                <Grid container spacing={3}>

                                    <Grid item xs={4}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                                            {address}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: '#f9f9f9 !important', padding: '20px' }}>Reservation for Thu, {date} at {slot} for {pax} person</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField name="firstname" fullWidth size="small" id="outlined-basic" label="First Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField name="lastname" fullWidth size="small" id="outlined-basic" label="Last Name" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Stack direction="row" spacing={0}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container>
                                                    <Grid item xs={4}>
                                                        <FormControl
                                                            fullWidth
                                                            size="small">
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={code}
                                                                label="Code"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={971}>971</MenuItem>
                                                                <MenuItem value={91}>91</MenuItem>
                                                                <MenuItem value={333}>333</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <TextField name="phone" fullWidth size="small" id="outlined-basic" label="Phone Number" variant="outlined" />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Stack>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField name="email" fullWidth size="small" id="outlined-basic" label="Email" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField name="request" fullWidth size="small" id="outlined-basic" label="Special Request" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant="body2" color="black" textAlign="left">By continuing, you agree to Eat's <a target="_blank" rel="external" sx={{ color: "blue !important" }} href="https://restaurant.eatapp.co/terms?_ga=2.56992301.660276949.1646573581-1331509494.1645690756">Terms of Service</a> and <a target="_blank" rel="external" sx={{ color: "blue !important" }} href="https://restaurant.eatapp.co/privacy?_ga=2.56992301.660276949.1646573581-1331509494.1645690756">Privacy Policy</a></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button type="submit" onClick={handleClick} fullWidth size="small" variant="contained" color="success" sx={{ textTransform: 'capitalize', }}>Complete Reservation</Button>
                                    </Grid>

                                </Grid>
                            </Form>
                        </Formik>
                    </Box>

                </CardContent>
            </Card>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', marginRight: '22%', marginTop: '10px' }}>
                Powered by <img alt="Eat App" title="Eat App" src="https://eatapp.co/packs/media/images/eat-logo-41821f7046d6114ef6f78a3a78065410.svg"></img>
            </Typography>
        </div>
    );
}
