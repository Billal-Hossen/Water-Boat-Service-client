import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../../images/speed-boat.png'

const Navbar = () => {
    return (
     
        <nav style={{backgroundColor:"#06294C",height:"100px"}} class="navbar sticky-top navbar-expand-lg  ">
        <div class="container">
          <a class="navbar-brand" href="#">  <img
        src={navlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />  <span className="mt-5">Water Boat</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <i class="fas fa-bars"></i>
      </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto w-100   justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link mr-5">Home</Link>
            </li >
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link mr-5">Dashboard</Link>
            </li >
            <li className="nav-item">
              <Link to="/login" className="nav-link mr-5">Login</Link>
            </li >
            <li className="nav-item">
              <Link to="/admin" className="nav-link mr-5">Admin</Link>
            </li >
            <li className="nav-item">
              <Link to="/review" className="nav-link mr-5">review</Link>
            </li >

                    
                   
             </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;