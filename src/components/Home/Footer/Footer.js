import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faTwitterSquare, faLinkedinIn,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const displaySocialIcon = (icon) => {

    return <div style={{background:"#E33A27", borderRadius:"100%"}} className="  px-2 py-1 mr-2  d-inline-block">
     <FontAwesomeIcon icon={icon}/>
    </div>
    
  }
  return (
    <section style={{ background: "#071C1F" }} className="">
      <div  className="row offset-1 pr-5 pl-4 pt-5 text-white footer-container pb-3">
        <div className="col-md-3 ">
          <h2>About Us</h2>
          <p>
          Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium totam rem aperiam eaque quae abillo inventore veritatis
          </p>
          { displaySocialIcon(faFacebookSquare)}
          { displaySocialIcon(faTwitterSquare)}
          { displaySocialIcon(faYoutubeSquare)}
          { displaySocialIcon(faLinkedinIn)}


        
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <h2>Our Product</h2>
          <ul className="p-0">
            <li>
              {" "}
              <FontAwesomeIcon className="check-mark-icon mr-1" icon={faCheckCircle} /> Tire and Wheel Services
            </li>
            <li>
              {" "}
              <FontAwesomeIcon className="check-mark-icon mr-1" icon={faCheckCircle} /> Brake Repair
            </li>
            <li>
              <FontAwesomeIcon className="check-mark-icon mr-1" icon={faCheckCircle} /> Engine Diagnostics
            </li>
            <li>
              <FontAwesomeIcon  className="check-mark-icon mr-1" icon={faCheckCircle} /> Belts and Hoses
            </li>
            <li>
              <FontAwesomeIcon className="check-mark-icon mr-1" icon={faCheckCircle} /> Lube, Oil and Filters
            </li>
            <li>
              <FontAwesomeIcon className="check-mark-icon mr-1" icon={faCheckCircle} /> Other Car Services
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2>Newsletters</h2>
          <p>
            Subscribe to our newsletters to get all updates. We navar share your
            email{" "}
          </p>

          <input
            className="d-block mb-3 w-100 pl-2 subscribe-input border-0"
            type="email"
            name=""
            placeholder="Your email"
            id=""
          />
<button className="hvr-sweep-to-right  ">Subscribe Now</button>
         
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <h2>Hours</h2>
          <ul className="d-inline-block p-0">
            <li>Monday:</li>
            <li>Tuesday:</li>
            <li>Wednesday:</li>
            <li>Thursday:</li>
            <li>Friday:</li>
            <li>Saturday:</li>
            <li>Sunday:</li>
          </ul>
          {/* <ul className="d-inline-block ">
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
            <li>10.00am - 4.00pm</li>
            <li>Closed</li>
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
          </ul> */}
        </div>
      </div>
      <div style={{background:"black",height:"100px"}} >
      <div className="container">
      <div style={{color:"#8f8786"}} className="d-flex flex-column flex-md-row  pt-4 justify-content-between align-items-center">
      <p>Copyright & Designed <br/> By Sakib Ahmed-2021 </p>
      <div style={{verticalAlign:"middle"}} className=" d-none d-md-block">
        <span className="mr-2">Terms and condition</span>
        <span className="mr-2">claim</span>
        <span className="mr-2">Privacy and policy</span>
      </div>
      </div>
  
      </div>
     
      </div>
    </section>
  );
};

export default Footer;
