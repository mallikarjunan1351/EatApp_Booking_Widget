import React from 'react'
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

export const UserInfo = (props) => {

    const parentCallback = props.parentCallback;

    const handleClick = () => {
        parentCallback();
    }

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
                                <Stack direction="row" spacing={0}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControl
                                                    fullWidth
                                                    size="small">
                                                    <Select
                                                        value={'Code'}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        <MenuItem key={1} value={'Code'}>{'Code'}</MenuItem>
                                                        <MenuItem key={2} value={'+971'}>{'+971 - UAE'}</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <TextField fullWidth size="small" id="outlined-basic" label="Phone Number" variant="outlined" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Stack>

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
                                <Button onClick={handleClick} fullWidth size="small" variant="contained" color="success" sx={{ textTransform: 'capitalize', }}>Complete Reservation</Button>
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
