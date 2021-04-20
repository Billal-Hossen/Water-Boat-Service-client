import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookCard from '../BookCard/BookCard';

const BookBoat = ({date}) => {

    return (
        <section>
        <h2 className="text-center text-brand mb-5">Available Booking on {date.toDateString()}</h2>
        <div className="row">
            
                <BookCard  date={date} ></BookCard>)
                {/* <BookCard booking={findData} date={date} key={findData._id}></BookCard>)
             */}
            
        </div>
    </section>
    );
};

export default BookBoat;