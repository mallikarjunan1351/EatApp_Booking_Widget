import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const DateSelection = (props) => {

    const data = props.data;
    const parentCallback = props.parentCallback;

    const [date, setdate] = React.useState('');

    const handleChange = (event) => {
        setdate(event.target.value);
        parentCallback(event.target.value);
    };

    const icon = <CalendarTodayOutlinedIcon sx={{ color: '#128849', marginBottom: '-32px', marginLeft: '15px' }} />;
    const menuItem = data.map((date, i) =>
        <MenuItem key={i} value={date.toString()}>{date.toString()}</MenuItem>
    );

    return (
        <FormControl sx={{ mt: 5, minWidth: '25%' }}>
            {icon}
            <Select
                value={date}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {menuItem}
            </Select>
        </FormControl>
    )
}
