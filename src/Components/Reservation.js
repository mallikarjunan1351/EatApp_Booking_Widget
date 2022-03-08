import React, { useState } from 'react'

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
