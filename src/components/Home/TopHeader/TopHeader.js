import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faClock,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"
const TopHeader = () => {
    return (
        <div style={{background:"red"}} className="container-fluid p-2 text-white d-none d-md-block">

        <div style={{width:'800px'}} className='ml-5 text-center'>
            <p className="d-inline mr-4 "> <FontAwesomeIcon icon={faMapMarkerAlt}/> Kuril Badda Dhaka 1229</p>
            <p className="d-inline mr-5"> <FontAwesomeIcon icon={faClock}/> Sun - Fri, 9.00AM - 5.00PM</p>
            <p className="d-inline mr-4"> <FontAwesomeIcon icon={faPhoneAlt}/> +880132675545</p>
            <p className="d-inline ml-5"><FontAwesomeIcon style={{fontSize:"20px"}} className='mr-2'  icon={faFacebook}/> <FontAwesomeIcon className='' style={{fontSize:"20px"}} icon={faTwitter}/></p>
        </div>
            
        </div>
    );
};

export default TopHeader;