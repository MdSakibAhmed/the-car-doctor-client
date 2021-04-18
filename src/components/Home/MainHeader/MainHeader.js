import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import BackgroundImg from '../../../image/muscular-car-service-worker-repairing-vehicle.jpg'
import "./MainHeader.css"
import { Button } from 'react-bootstrap';

const MainHeader = () => {
  
    return (
        <div className="main-header">
        <div>
        <HeaderNavbar></HeaderNavbar>
        </div>
        <div style={{marginTop:"100px"}} className="text-center text-white ">
        <h1 style={{fontSize:"50px"}}>Make Your Car Last Longer</h1>
        <Button className="mt-4 bold" variant="danger">GET A SERVICE</Button>

        </div>
            
        </div>
    );
};

export default MainHeader;