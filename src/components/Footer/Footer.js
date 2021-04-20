import React from 'react';
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare,FaTwitter,FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer style={{backgroundColor:"#1E1E1E"}}>
            <div className="row d-flex text-white mb-5">
                <div className="col-md-3  offset-md-1 mt-5">
                    <h3>Water Boat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam rem dicta doloribus cumque corrupti necessitatibus, quo accusamus cum assumenda esse dolores incidunt natus explicabo, facere deserunt officia commodi.</p>
                    <p> <FcCellPhone/> +145-346-7733</p>
                    <p><MdEmail/> programminghero001@gmail.com</p>
                    <div className="d-flex fa-2x">
                        <FaFacebookSquare style={{color:"#3A5794"}} className="mr-4 "/>
                        <FaTwitter style={{color:"#00A7E7"}} className="mr-4 "/>
                        <FaYoutube style={{color:"#c4302b"}} className="mr-4 "/>


                    </div>
                </div>
                <div className="col-md-3  offset-md-1 mt-5">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Events</li>
                        <li>Contract</li>
                        <li>Galleries</li>
                        <li>Write for us</li>
                        <li>tram and conditions</li>
                    </ul>

                </div>
                <div className="col-md-3  offset-md-1 mt-5">
                    <h3>Contact Us</h3>

                </div>
            </div>
            <div style={{backgroundColor:"#022447"}} className="copyRight text-center h-5">
                    <p className="text-white"> Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>

        </footer>
    );
};

export default Footer;