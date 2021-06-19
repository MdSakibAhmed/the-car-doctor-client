import "./OurTeam.css"
import React, { useEffect } from 'react';
import img1 from "../../../image/2.jpg"
import img2 from "../../../image/4.jpg";
import img3 from "../../../image/5.jpg";
import img4 from "../../../image/1.jpg";
import { faInstagramSquare, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";

const OurTeam = () => {
  useEffect(()=> {
    AOS.init({
      duration:3000
    })

  },[])
    return (
        <div className="container mt-5 mb-5">

        <h1 style={{fontFamily:"'Rajdhani', sans-serif",textAlign:"center"}}>OUR MECHANICS</h1>
        <span className="d-block" style={{width:"120px", borderBottom:"3px solid red", margin:"10px auto 30px auto"}}></span>
        <div data-aos="fade-right"  className="d-flex mb-3 mb-md-0 flex-column flex-md-row justify-content-center mt-3 ">
        <div className=" team-mechanics-container ml-4  d-flex flex-column align-items-center justify-content-between  " id="founder">
        <img className="team-mechanics" src={img1} alt="" />
        <p>Founder</p>
        <h4>Abdurrob Faruky</h4>
        <div className="social-icon-founder mt-3 ">
        <p className=" text-center ">
          <FontAwesomeIcon
            style={{ fontSize: "18px" }}
            className="mr-2 social-icon-team text-white"
            icon={faLinkedinIn}
          />{" "}
          <FontAwesomeIcon
            className="mr-3 social-icon-team text-white"
            style={{ fontSize: "18px" }}
            icon={faTwitter}
          /> 
           <FontAwesomeIcon
            className="social-icon-team text-white"
            style={{ fontSize: "18px" }}
            icon={faInstagramSquare}
          />
        </p>  
        </div>

        </div>
        <div data-aos="fade-right"  className=" team-mechanics-container d-flex flex-column align-items-center justify-content-between  ml-4" id="ceo">
        <img className="team-mechanics" src={img4} alt="" />
        <p>CEO</p>
        <h4>A.J Masud</h4>
        <div className="social-icon-ceo mt-3 ">
        <p className=" text-center ">
          <FontAwesomeIcon
            style={{ fontSize: "18px" }}
            className="mr-2 social-icon-team"
            icon={faLinkedinIn}
          />{" "}
          <FontAwesomeIcon
            className="mr-3 social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faTwitter}
          /> 
           <FontAwesomeIcon
            className="social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faInstagramSquare}
          />
        </p>  
        </div>
        </div>
        <div data-aos="fade-right"  className=" team-mechanics-container d-flex flex-column align-items-center justify-content-between   ml-4" id="mechanic1">
        <img  className="team-mechanics" src={img3} alt="" />
        <p>MECHANIC</p>
        <h4>Aktaruzzaman</h4>
        <div className="social-icon-mechanic1 mt-3 ">
        <p className=" text-center ">
          <FontAwesomeIcon
            style={{ fontSize: "18px" }}
            className="mr-2 social-icon-team"
            icon={faLinkedinIn}
          />{" "}
          <FontAwesomeIcon
            className="mr-3 social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faTwitter}
          /> 
           <FontAwesomeIcon
            className="social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faInstagramSquare}
          />
        </p>  
        </div>
        </div>
        <div data-aos="fade-right"  className=" team-mechanics-container  d-flex  flex-column  align-items-center justify-content-between ml-4" id="mechanic2">
        <img  className="team-mechanics" src={img2} alt="" />
         <p >MECHANIC</p>
        <h4> Muhammad Rafid</h4>
        <div className="social-icon-mechanic2 mt-3 ">
        <p className=" text-center ">
          <FontAwesomeIcon
            style={{ fontSize: "18px" }}
            className="mr-2 social-icon-team"
            icon={faLinkedinIn}
          />{" "}
          <FontAwesomeIcon
            className="mr-3 social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faTwitter}
          /> 
           <FontAwesomeIcon
            className="social-icon-team"
            style={{ fontSize: "18px" }}
            icon={faInstagramSquare}
          />
        </p>  
        </div>
        
        </div>   
        </div>
        
            
        </div>
    );
};

export default OurTeam;