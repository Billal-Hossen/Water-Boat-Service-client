import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import boat4 from '../../../images/boat4.jpg'
import boat5 from '../../../images/Boat5.jpg'
import boat6 from '../../../images/boat6.jpg'
import { BsPerson } from "react-icons/bs";
import { GiSpeedBoat } from "react-icons/gi";
import ft from '../../../images/angle.svg'
import PopularService from '../PopularService/PopularService';



const OurServices = () => {
    const [services,setService]=useState([])
    useEffect( () => {
        fetch('https://dry-ridge-60561.herokuapp.com/boats')
        .then(res => res.json())
        .then(data => setService(data.slice(0,3)))
    }, [])
    console.log(services)
    
    return (
       <div className="row d-flex m-5">
           {
               services.map(service=><PopularService service={service}></PopularService>)
           }

       </div>
    );
};

export default OurServices;