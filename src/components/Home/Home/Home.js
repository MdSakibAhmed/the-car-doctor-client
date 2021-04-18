import React from 'react';
import Login from '../../Login/Login';
import Achievement from '../Achievement/Achievement';
import CustomerReviews from '../CustomReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainFeatures from '../MainFeatures/MainFeatures';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <MainFeatures></MainFeatures>
            <Services></Services>
            <Achievement></Achievement>
            <CustomerReviews/>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;