import React, { useState } from 'react';

import Sidebar from '../../Deshboard/Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar';
import BookBoat from '../BookBoat/BookBoat';
import BookingHeader from './BookingHeader';

const Booking = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleCalenderDate=date=>{
       setSelectedDate(date)
    }
    return (
        <div>
         <Navbar/>
            <BookingHeader handleCalenderDate={handleCalenderDate}></BookingHeader>
            <BookBoat date={selectedDate}></BookBoat>
        </div>
    );
};

export default Booking;