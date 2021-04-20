import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { BsPerson } from "react-icons/bs";
import { GiSpeedBoat } from "react-icons/gi";
import { Link } from 'react-router-dom';


const ShowAllService = ({service}) => {
    return (
        <div className="col-md-4  ">
        <Card style={{ width: '21rem' }} className="">
    <Card.Img variant="top" className="" src={`data:image/png;base64,${service.image.img}`} />
    <Card.Body >
        <Card.Title>{service.name}</Card.Title>
        <h4>{service.country}</h4>
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
       <Link to={`/booking/${service._id}`}> <Button variant="primary" className=" mt-3">Go somewhere</Button></Link>
    </Card.Body>
</Card>

   </div>
    );
};

export default ShowAllService;