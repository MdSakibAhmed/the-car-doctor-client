import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";
import AOS from "aos";
import { useEffect } from "react";


const Service = ({ service }) => {
  const { title, description, price, img, _id } = service;
  const history = useHistory();

useEffect(()=> {
AOS.init({
    duration:1000
})
},[])

  return (

    <div data-aos="fade-left" className="    ml-md-0 service-container  mr-0 mr-md-4 d-flex justify-content-start flex-column mb-4  border shadow ">

      <img className="img-fluid service-img" src={img} alt="" />
      <div className=" text-center px-3 hvr-bounce-to-right d-flex description-container align-items-center justify-content-start flex-column">
        <h2 style={{fontFamily: "'Rajdhani', sans-serif"}} className=" pt-3 service-title">{title}</h2>
        
        <p className="text-justify service-description" >
          {description}
        </p>
        <h3 data-aos="fade-right" id="service-charge">$ {price}</h3>
        <button onClick={()=> history.push(`/orderNow/${_id}`)} data-aos="fade-up" className="hvr-shutter-out-vertical border-0 p-2 rounded" id="book-now-btn">
          BOOK NOW
        </button>
      </div>

      {/* <div className='bg-dark  order-button'>
            <Button style={{fontSize:"16px"}} variant='danger' onClick={()=> history.push(`/orderNow/${_id}`)}>GET THIS SERVICE</Button><span  style={{color:"white",fontSize:"20px",marginLeft:"100px",fontWeight:"bold"}} className=' text-white d-inline-block'>$ {price}</span>
            </div> */}
    </div>
  );
};

export default Service;
