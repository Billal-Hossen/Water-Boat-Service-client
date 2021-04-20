import React, { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';

const Review = ({review}) => {
    console.log(review)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="col-md-4">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`data:image/png;base64,${review.image.img}`} />
  <Card.Body>
 
    <Card.Text>{review.text}</Card.Text>
 
  </Card.Body>
</Card>






              {/* <img className="col-md-4"  src={`data:image/png;base64,${review.image.img}`} alt=""/>
            <p></p>
        */}
          
            
        </div>
    );
};

export default Review;