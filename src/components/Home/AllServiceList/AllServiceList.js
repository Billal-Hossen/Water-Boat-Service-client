import React from 'react';
import Sidebar from '../../Deshboard/Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import ShowAllService from '../ShowAllServiceList/ShowAllServiceList';

const AllServiceList = () => {
  
 
    return (
       <div>
           <Navbar/>
           <div className="row  ">
           <div className="col-md-2">
             <Sidebar/>

         </div>
         <div className="col-md-6">
             <ShowAllService/>
         </div>

       </div>
       </div>
    );
};

export default AllServiceList;