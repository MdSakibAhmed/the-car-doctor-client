import React from "react";
import "./MainFeatures.css";
import AOS from "aos";
import { Button } from "react-bootstrap";
import Image from "../../../image/science-in-hd-ooNO0LlxZRM-unsplash (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const MainFeatures = () => {

  useEffect(()=> {
AOS.init({
  duration:3000
})
AOS.refresh()

  },[])
  return (
    <div  className="pt-5 pb-5 row mt-5">
      <div className="col-md-5 order-2 order-md-1 offset-1">
        <p data-aos="fade-right" className="text-danger bold fs-1">Best Car Solutions</p>
        <h2 data-aos="fade-down" className="mb-4" style={{fontFamily:"'Rajdhani', sans-serif",fontSize:"40px"}}>We’re Certified & Expert Car Servicing Agency</h2>
        <p data-aos="fade-right" className="mb-3">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born will give
        </p>
        <ul data-aos="fade-right" className="d-inline-block p-0 p-md-3 ">
          <li >
            {" "}
            <FontAwesomeIcon className="check-mark-icon" icon={faCheckCircle} /> Tire and Wheel
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className=" check-mark-icon" icon={faCheckCircle} /> Automotive
            Filters
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className=" check-mark-icon" icon={faCheckCircle} /> Best
            Opportunity
          </li>
        </ul>
        <ul data-aos="fade-left" className="d-block d-md-inline-block p-0">
          <li>
            {" "}
            <FontAwesomeIcon className=" check-mark-icon" icon={faCheckCircle} /> Drivability
            Problems
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className=" check-mark-icon" icon={faCheckCircle} /> Experience
            Members
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className="check-mark-icon" icon={faCheckCircle} /> Driving School
          </li>
        </ul>

        <button data-aos="fade-up"  className="d-block mb-3 mt-3 hvr-sweep-to-right" >
          Learn more
        </button>
      </div>
      <div data-aos="fade-left" data-aos-delay="1000" className="col-md-5 order-1 order-md-2 mb-3 mb-md-0">
        <img src={Image} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default MainFeatures;
