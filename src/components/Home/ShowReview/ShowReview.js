import { Carousel } from 'bootstrap';
import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../images/boat4.jpg'
import Review from './Review/Review';




const ShowReview = () => {
    const [showReview,setShowReview]=useState([])
    const [newReview,setNewReview]=useState({})
    useEffect( () => {
        fetch('https://dry-ridge-60561.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setShowReview(data))
    }, [])
 
    
  
    return (
        <div style={{height:"500px",backgroundColor:"#174471"}} className="container-fluid mb-5">
            <h1 style={{color:"#022447",fontSize:"40px"}}>What Clients Say</h1>

         
<div className=" row d-flex m-5">
             
{
    showReview.map(review=><Review review={review}></Review>)
}
</div>



            
        </div>
    );
};

export default ShowReview;