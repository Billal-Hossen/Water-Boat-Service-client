import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    useEffect(() => {
        fetch('https://dry-ridge-60561.herokuapp.com/findAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    // console.log(loggedInUser)
    // console.log(admins)
    // const run=admins.find(admin=>admin.email===loggedInUser.email && setMatch(true))
    // console.log(run)
  
    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "150vh" }}>
            <ul className="list-unstyled">
              
                 {   isAdmin && <div>
                  <li>
                      <Link to="/addAdmin" className="text-white">
                          <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Admin</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/allServiceList" className="text-white">
                          <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span>
                      </Link>
                  </li>

                  <li>
                      <Link to="/addService" className="text-white">
                          <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                      </Link>
                  </li>
                

                  <li>
                      <Link to="/manageService" className="text-white">
                          <span>Manage Service</span>
                      </Link>
                  </li>
            
                  </div>}
             
                 
                    <li>
                        <Link to="/book" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookList" className="text-white" >
                       <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Review" className="text-white" >
                            <span>Review</span>
                        </Link>
                    </li>
              
               
       


            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;