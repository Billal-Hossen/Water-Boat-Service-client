import React from 'react';
import water from '../../../images/jikjak-3.png'

const MainHeader = () => {
    return (
        <div style={{height:"700px"}} className="main-header ">
     <div className="text-center text-white">
         
     <img  className="align-content-center mt-5 " src={water} alt=""/>
            <h2  style={{marginTop:"200px"}} className="text-green">Welcome to Our Charter</h2><br/>
            <h1>The Ultimate Yahting Experience</h1>
     </div>
      
            
        </div>
    );
};

export default MainHeader;