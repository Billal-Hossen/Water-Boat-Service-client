import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import BookingForm from '../BookingForm/BookingForm';

const BookCard = ({ date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }


  const {id}=useParams()
  
    
  const [findData,setBookData]=useState([])
  const [services,setService]=useState([])
  useEffect( () => {
      fetch(`https://dry-ridge-60561.herokuapp.com/boats/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])


console.log(services)



    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    {/* <img src={`data:image/png;base64,${services.image}`}  alt=""/> */}
                    {/* <h5 className="card-title text-brand">{services.name}</h5> */}
                    {/* <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p> */}
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <BookingForm modalIsOpen={modalIsOpen} appointmentOn={services.country} closeModal={closeModal} date={date}></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default BookCard;