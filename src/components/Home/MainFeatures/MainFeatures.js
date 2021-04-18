import React from "react";
import { Button } from "react-bootstrap";
import Image from "../../../image/science-in-hd-ooNO0LlxZRM-unsplash (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const MainFeatures = () => {
  return (
    <div style={{ background: "#F2F2F2" }} className="pt-5 pb-5 row">
      <div className="col-md-5 offset-1">
        <p className="text-danger bold fs-1">Best Car Solutions</p>
        <h2 className="mb-4">We’re Certified & Expert Car Servicing Agency</h2>
        <p className="mb-3">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born will give
        </p>
        <ul className="d-inline-block p-0">
          <li>
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Tire and Wheel
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Automotive
            Filters
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Best
            Opportunity
          </li>
        </ul>
        <ul className="d-inline-block">
          <li>
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Drivability
            Problems
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Experience
            Members
          </li>
          <li className="mt-2">
            {" "}
            <FontAwesomeIcon className="" icon={faCheckCircle} /> Driving School
          </li>
        </ul>

        <Button className="d-block mb-3 mt-3" variant="danger">
          Learn more
        </Button>
      </div>
      <div className="col-md-5">
        <img src={Image} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default MainFeatures;
