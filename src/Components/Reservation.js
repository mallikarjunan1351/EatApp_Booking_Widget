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

import { UserInfo } from './UserInfo';
import { SlotSelection } from './SlotSelection';


export const Reservation = () => {

    const [showUser, setShowUser] = useState(false);

    const handleUser = () => {
        setShowUser(true);
    }

    const handleSlot = () => {
        setShowUser(false);
    }

    let view = "";
    if (showUser) {
        view = <UserInfo parentCallback={handleSlot} />
    } else {
        view = <SlotSelection parentCallback={handleUser} />
    }


    return (
        <div>
            {view}
        </div>
    );

}
