
import Sidebar from '../../Deshboard/Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar';
import React, { useEffect, useState } from 'react';

import { FaBeer,FaEdit,FaPlus } from 'react-icons/fa';
import {MdDelete,MdBorderAll } from 'react-icons/md';
import Footer from '../../Footer/Footer';

const ManageServices = () => {
 
    const [services,setService]=useState([])
    useEffect( () => {
        fetch('https://dry-ridge-60561.herokuapp.com/boats')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    const deleteBook=id=>{
        fetch(`https://dry-ridge-60561.herokuapp.com/delete/${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          console.log('this is delete');
          
          
        })
      }
    return (
        
              <div>
            <Navbar/>
            <div style={{backgroundColor:"black"}} className="row">
                <div className="col-md-2 ">
                    <Sidebar/>

                </div>
                <div  className="col-md-10 text-white">
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
                       <td><FaEdit/>   <MdDelete style={{color:"red"}} onClick={()=>deleteBook(service._id)}/> </td>
                       
                      
                   </tr>
                   )
               }
           </tbody>
       </table>
        }
                    
                    </div>
            </div>
        
            
        </div>
      
               
        
    );
};

export default ManageServices;