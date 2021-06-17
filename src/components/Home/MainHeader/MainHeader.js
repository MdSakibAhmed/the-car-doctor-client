import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import BackgroundImg from '../../../image/muscular-car-service-worker-repairing-vehicle.jpg'
import "./MainHeader.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  
    return (
        <div className="">
        <div>
        <HeaderNavbar></HeaderNavbar>
        </div>
        <div style={{marginTop:"100px"}} className="text-center text-white ">
        <h1 style={{fontSize:"60px",fontFamily: 'Russo One'}}>Make Your Car Last Longer</h1>
        
        <Link to="/services"><Button className="mt-4 bold" variant="danger">GET A SERVICE</Button></Link>
        

        </div>
            
        </div>
    );
};

export default MainHeader;