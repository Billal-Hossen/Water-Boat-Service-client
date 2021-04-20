import React from 'react';
import OurServices from '../../Admin/OurServices/OurServices';
import Footer from '../../Footer/Footer';
import AllService from '../AllService/AllService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services/>
           <OurServices/>
           <ShowReview/>
           <AllService/>
           <Footer/>
        </div>
    );
};

export default Home;