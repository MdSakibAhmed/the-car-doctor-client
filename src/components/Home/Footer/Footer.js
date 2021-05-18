import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#F2F2F2" }} className="row pr-5 pl-4 pt-5">
        <div className="col-md-3">
          <h2>About Us</h2>
          <p>
            We offer full range of garage services to vehicle owners in Tucson.
            Our professionals know how to handle a wide range of car services.
            Whether you drive a passenger car or medium sized truck or SUV, our
            mechanics strive to ensure that your vehicle will be performing at
            its best before leaving our car shop. Whether you drive a medium
            sized truck or passenger car or SUV, our mechanics strive to ensure.
          </p>
          <div></div>
        </div>
        <div className="col-md-3">
          <h2>Our Product</h2>
          <ul className="p-0">
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheckCircle} /> Tire and Wheel Services
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheckCircle} /> Brake Repair
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Engine Diagnostics
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Belts and Hoses
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Lube, Oil and Filters
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Other Car Services
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

          <Button type="submit" variant="danger">
            Subscribe Now
          </Button>
        </div>
        <div className="col-md-3">
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
          <ul className="d-inline-block ">
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
            <li>10.00am - 4.00pm</li>
            <li>Closed</li>
            <li>8.00am - 6.00pm</li>
            <li>8.00am - 6.00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
