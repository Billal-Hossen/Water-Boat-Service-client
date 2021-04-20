import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Search from '../../../images/search.jpg'

const BookingHeader = ({handleCalenderDate}) => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{ color: '#3A4256' }}>Select Booking Date</h1>
            <Calendar
                onChange={handleCalenderDate}
                value={new Date()}
            />
        </div>
        <div className="col-md-6">
            <img src={Search} alt="" className="img-fluid" />
        </div>
    </main>
    );
};

export default BookingHeader;