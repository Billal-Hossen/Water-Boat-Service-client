import React, { useEffect, useState } from 'react';

const ShowAllServiceList = () => {
    const [services,setService]=useState([])
    useEffect( () => {
        fetch('https://dry-ridge-60561.herokuapp.com/boats')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
     <div>
         {
           
                <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Country</th>
                    <th className="text-secondary" scope="col">Per Day Rate</th>
                    <th className="text-secondary" scope="col">Berth</th>
                    <th className="text-secondary" scope="col">Long</th>
                
                    </tr>
                </thead>
                <tbody>
                    {
                      services.map((service, index) => 
                            
                        <tr>
                            <td>{index + 1}</td>
                            <td>{service.name}</td>
                            <td>{service.country}</td>
                            <td>${service.price}</td>
                            <td>{service.berth} berth</td>
                            <td>{service.long} ft</td>
                        
                        </tr>
                        )
                    }
                </tbody>
            </table>
             }
         
     </div>
    );
};

export default ShowAllServiceList;