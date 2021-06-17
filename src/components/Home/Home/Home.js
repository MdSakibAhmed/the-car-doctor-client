import React from 'react';
import Login from '../../Login/Login';
import Achievement from '../Achievement/Achievement';
import CustomerReviews from '../CustomReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainFeatures from '../MainFeatures/MainFeatures';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div style={{background:"#F2F7F7"}}>
           
            <Header></Header>
            <WelcomeSection/>
            <MainFeatures></MainFeatures>
            <Services></Services>
            <OurTeam/>
            <Achievement></Achievement>
            <CustomerReviews/>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;