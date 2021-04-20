import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import HeaderPic from '../../../images/about-2-3.jpg'

const Header = () => {
    return (
        <div>
              <Navbar></Navbar>
              <MainHeader/>
           <div className="row mt-5 d-flex align-items-center jumbotron">
               <div className="col-md-4 offset-md-1">
                <h5>About</h5>
                <h1 style={{color: '#3A4256'}}><span>Welcome to Best</span><br/> Yachting Platform</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto error id aliquid numquam molestiae autem aliquam quibusdam, dicta aperiam obcaecati vel repellendus magni repudiandae. Sed ex cum dicta aperiam numquam praesentium veniam saepe tempora dolore? Deleniti facere minima nesciunt, molestiae quas quae at aperiam dolor, amet, voluptate consequuntur. Sequi, fugit doloribus excepturi vitae enim provident sit pariatur. Corrupti porro sequi, quis autem sit voluptates explicabo tempora cupiditate aut dolores commodi amet qui quod, dolor ad modi pariatur repellat provident temporibus!</p>
                <button className="btn btn-primary">BOOKING</button>
               </div>
               <div className="col-md-6">
                   <img src={HeaderPic} className="img-fluid" style={{width:"100%"}} alt=""/>
                   
                   </div>
           </div>
        </div>
    );
};

export default Header;