import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import {Spinner} from "react-bootstrap";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination,Autoplay,EffectFade]);
const CustomerReviews = () => {
    const [successDataLoad, setSuccessDataLoad] = useState(false)
    const [reviews,setReviews] = useState([])
    useEffect(()=> {
        fetch('https://infinite-shelf-48964.herokuapp.com/reviews').then(res => res.json()).then(data => {
            setSuccessDataLoad(true)
            setReviews(data)})
    },[])
   
    return (
        <section className="">
      
    <div className="container bg-white text-center p-md-5 p-3" >

    <h1 style={{fontFamily: "'Rajdhani', sans-serif",marginBottom:"0px"}}>Testimonials</h1>
    <span className="d-block" style={{width:"100px", borderBottom:"3px solid red", margin:"10px auto 30px auto"}}></span>

   
   {!successDataLoad? <Spinner animation="border" variant="danger" />:<div className="d-flex justify-content-center align-items-center">

<Swiper
      spaceBetween={10}
      loop={true}
      scrollbar={{ draggable: true }}
      pagination={{clickable:true}}
      slidesPerView={1}
      autoplay={{delay:2000,disableOnInteraction:false}}
      breakpoints={{
          640:{slidesPerView:1,
              spaceBetween:2
          },
          768:{
              slidesPerView:2,
              spaceBetween:10,

          },
          1024:{
              slidesPerView:3,
              spaceBetween:10
          }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            {reviews.map(review => <SwiperSlide><CustomerReview key={review._id} review={review}></CustomerReview></SwiperSlide> )}
  </Swiper>
</div>}

 </div>
        </section>
        
    );
};

export default CustomerReviews;