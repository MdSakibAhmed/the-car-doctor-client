import React from 'react';
import Slider from "react-slick";


import Image1 from '../../../image/muscular-car-service-worker-repairing-vehicle.jpg'
import Image2 from '../../../image/science-in-hd-ooNO0LlxZRM-unsplash (1).jpg';
import Image3 from '../../../image/mechanic-hand-checking-fixing-broken-car-car-service-garage.jpg'
const SimpleSlider = () => {
    return (
        <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1}>
            <img src={Image1} style={{width:'900px'}} alt=''/>
    <img src={Image2} style={{width:'900px'}} alt='' />
    <img src={Image3} style={{width:'900px'}} alt='' />
        </Slider>
    );
};

export default SimpleSlider;