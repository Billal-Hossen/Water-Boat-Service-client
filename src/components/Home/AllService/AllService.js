import React, { useEffect, useState } from 'react';
import direction from '../../../images/direction-3.png'
import ShowAllService from '../ShowAllService/ShowAllService';

const AllService = () => {
    const [services,setService]=useState([])
    useEffect( () => {
        fetch('https://dry-ridge-60561.herokuapp.com/boats')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    // console.log(services)
    return (
        <div className="container-fluid">
            <div style={{backgroundColor:"#022447",height:"500px"}} className="text-center text-white">
            <img src={direction} className="mt-5" width="100"
        height="100"
       alt=""/>
            <h4>OUR ALL BOATS</h4>
            <h1 style={{fontSize:"80px"}}>Yachts for Charter</h1>
            
        </div>
        <div className="row d-flex m-5">
            {
                services.map(service=><ShowAllService service={service}></ShowAllService>)
            }

        </div>
            
        </div>
    );
};

export default AllService;