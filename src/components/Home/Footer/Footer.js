import React from 'react';
import { Button } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
        <div style={{background:"#F2F2F2"}} className="row pr-5 pl-4 pt-5">
            <div className="col-md-3">
                <h2>About Us</h2>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos optio repellat repellendus tempora? Nisi laborum similique placeat. Consequuntur voluptas commodi cumque consectetur natus iste saepe nisi laboriosam distinctio dolorem.</p>
                 <div>

                 </div>
            </div>
            <div className="col-md-3">
                <h2 >Our Product</h2>
                <ul className='p-0' >
                    <li>Tire and Wheel Services</li>
                    <li>Brake Repair</li>
                    <li>Engine Diagnostics</li>
                    <li>Belts and Hoses</li>
                    <li>Lube, Oil and Filters</li>
                    <li>Other Car Services</li>
                </ul>
            </div>
            <div className="col-md-3">
                <h2>Newsletters</h2>
                <p >Subscribe to our newsletters to get all updates. We navar share your email  </p>

                <input className='d-block mb-3 w-100 pl-2 subscribe-input border-0' type="email" name="" placeholder="Your email" id=""/>
              
                <Button type="submit" variant="danger">Subscribe Now</Button>
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