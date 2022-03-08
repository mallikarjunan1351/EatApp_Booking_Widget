import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const TimeSelection = (props) => {

    const data = props.data;
    const parentCallback = props.parentCallback;

    const [time, setTime] = React.useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
        parentCallback(event.target.value);
    };

    const icon = <AccessTimeOutlinedIcon sx={{ color: '#128849', marginBottom: '-32px', marginLeft: '15px' }} />;
    const menuItem = data.map((date, i) =>
        <MenuItem key={i} value={date.toString()}>{date.toString()}</MenuItem>
    );

    return (
        <FormControl sx={{ mt: 5, minWidth: '25%' }}>
            {icon}
            <Select
                value={time}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {menuItem}
            </Select>
        </FormControl>
    )
}
