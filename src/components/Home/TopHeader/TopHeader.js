import React from "react";
import "./TopHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagramSquare, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
const TopHeader = () => {
  return (
    <div
      style={{color:"black", borderBottom:"2px solid #E5EAEE"}}
      className="container-fluid pt-2 d-none pl-5 d-md-block"
    >
      <div style={{ width: "800px" }} className="ml-5  d-flex justify-content-between">
        <p className="d-inline bold top-header-content  mr-4 ">
          {" "}
          <FontAwesomeIcon style={{color:"red"}} icon={faEnvelope} /> sakib@gmail.com
        </p>
        <p className="d-inline bold top-header-content mr-4 ">
          {" "}
          <FontAwesomeIcon style={{color:"red"}} icon={faMapMarkerAlt} /> Kuril,ka-244 Dhaka
        </p>
        <p className="d-inline top-header-content mr-5">
          {" "}
          <FontAwesomeIcon style={{color:"red"}} icon={faClock} /> Sun - Fri, 9.00AM - 5.00PM
        </p>
       
        <p className="d-inline  ml-5">
          <FontAwesomeIcon
            style={{ fontSize: "15px" }}
            className="mr-2 top-header-content"
            icon={faLinkedinIn}
          />{" "}
          <FontAwesomeIcon
            className="mr-3 top-header-content"
            style={{ fontSize: "15px" }}
            icon={faTwitter}
          /> 
           <FontAwesomeIcon
            className="top-header-content"
            style={{ fontSize: "15px" }}
            icon={faInstagramSquare}
          />
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
