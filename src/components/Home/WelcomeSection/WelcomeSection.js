import React, { useEffect } from "react";
import "./WelcomeSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import carImg from "../../../image/13-2-car-png.png";
const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
      <div className="container">
    <div className="row pt-5 ">
      <div data-aos="fade-right" className="col-md-5    col-12">
        <img src={carImg} className="car-img " alt="" />
      </div>

      <div className="heading-right-side col-md-6  ml-auto col-12 ">
        <div data-aos="fade-left">
          <h1
            style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "50px" }}
          >
            Professional Car Service Provide
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            tenetur quam laboriosam autem corrupti, aspernatur fugit facere
            molestiae soluta odio maiores quidem, repudiandae placeat
            voluptatibus voluptates officia accusantium inventore tempora.
          </p>
        </div>

        <div data-aos="fade-up" className="mt-5">
          <button className="hvr-sweep-to-right  ">Our service</button>
          <button className=" hvr-sweep-to-left shadow rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WelcomeSection;
