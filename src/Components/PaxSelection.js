import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const PaxSelection = () => {

    const pax = 50;
    const arr = Array.from({ length: pax }, (_, index) => index + 1);

    const [person, setPerson] = React.useState('2');

    const handleChange = (event) => {
        setPerson(event.target.value);
    };

    const icon = <PersonOutlineIcon sx={{ color: '#128849', marginBottom: '-32px', marginLeft: '15px' }} />;
    const menuItem = arr.map((num) =>
        <MenuItem key={num.toString()} value={num.toString()}>{num.toString() + ' person'}</MenuItem>
    );

    return (
        <FormControl sx={{ mt: 5, minWidth: '25%' }}>
            {icon}
            <Select
                value={person}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {menuItem}
            </Select>
        </FormControl>
    )
}
