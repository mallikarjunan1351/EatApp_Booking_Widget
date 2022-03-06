import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const UserInfo = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div>
            <Card sx={{ maxWidth: '50%', margin: 'auto', marginTop: '50px', padding: '50px' }}>
                <CardContent sx={{ padding: '0px 16px' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                                    Miss Tess
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                                    Business Bay
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: '#f9f9f9 !important', padding: '20px' }}>Reservation for Thu, Aug 01 at 6.15pm for 1 person</Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth size="small" id="outlined-basic" label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth size="small" id="outlined-basic" label="Last Name" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth size="small" id="outlined-basic" label="Phone Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth size="small" id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth size="small" id="outlined-basic" label="Special Request" variant="outlined" />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="body2" color="black" textAlign="left">By continuing, you agree to Eat's <a target="_blank" sx={{ color: "blue !important" }} href="https://restaurant.eatapp.co/terms?_ga=2.56992301.660276949.1646573581-1331509494.1645690756">Terms of Service</a> and <a target="_blank" sx={{ color: "blue !important" }} href="https://restaurant.eatapp.co/privacy?_ga=2.56992301.660276949.1646573581-1331509494.1645690756">Privacy Policy</a></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth size="small" variant="contained" color="success" sx={{ textTransform: 'capitalize', }}>Complete Reservation</Button>
                            </Grid>

                        </Grid>
                    </Box>

                </CardContent>
            </Card>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', marginRight: '22%', marginTop: '10px' }}>
                Powered by <img alt="Eat App" title="Eat App" src="https://eatapp.co/packs/media/images/eat-logo-41821f7046d6114ef6f78a3a78065410.svg"></img>
            </Typography>
        </div>
    );
}
