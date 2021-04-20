import React from 'react';
import { Button, Card } from 'react-bootstrap';
import boat4 from '../../../images/boat4.jpg'
import boat5 from '../../../images/Boat5.jpg'
import boat6 from '../../../images/boat6.jpg'
import { BsPerson } from "react-icons/bs";
import { GiSpeedBoat } from "react-icons/gi";
import ft from '../../../images/angle.svg'

const PopularService = ({service}) => {
    
    return (
       <div className="col-md-4 col-sm   popular-service ">
            <Card style={{ width: '21rem' }} className="">
        <Card.Img variant="top" className="" src={`data:image/png;base64,${service.image.img}`} />
        <Card.Body >
            <Card.Title>Name: {service.name}</Card.Title>
            <h4>Country: {service.country}</h4>
            <div className="container-fluid d-flex row mt-3">
            <div className="col-md-4">
                <hp> {service.long} ft</hp>
            </div>
            <div className="col-md-4">
                <hp> {service.cabin} cabins</hp>
            </div>
            <div className="col-md-4">
                <hp>{service.berth} berths</hp>
            </div>
        </div>
          
        </Card.Body>
    </Card>

       </div>
    );
};

export default PopularService;