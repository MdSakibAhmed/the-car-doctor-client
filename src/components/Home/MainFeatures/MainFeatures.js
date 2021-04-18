import React from 'react';
import { Button } from 'react-bootstrap';
import Image from '../../../image/science-in-hd-ooNO0LlxZRM-unsplash (1).jpg'

const MainFeatures = () => {
    return (
        <div style={{background:"#F2F2F2"}} className="pt-5 pb-5 row">
            <div className="col-md-5 offset-1">
            <p className="text-danger bold fs-1">Best Car Solutions</p>
            <h2 className='mb-4'>We’re Certified & Expert Car Servicing Agency</h2>
            <p className='mb-3'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born will give</p>
           <ul className='d-inline-block'>
               <li >Tire and Wheel</li>
               <li  className='mt-2'>Automotive Filters</li>
               <li className='mt-2'>Best Opportunity</li>
           </ul>
           <ul className='d-inline-block'>
               <li>Drivability Problems</li>
               <li className='mt-2'>Experience Members</li>
               <li className='mt-2'>Driving School</li>
           </ul>

           <Button className="d-block mt-3" variant='danger'>Learn more</Button>

            </div>
            <div className="col-md-5">
<img src={Image} className='img-fluid' alt=""/>
            </div>
        </div>
    );
};

export default MainFeatures;