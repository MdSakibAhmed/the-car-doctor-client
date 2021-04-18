import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faQuoteRight,faQuoteLeft} from "@fortawesome/free-solid-svg-icons"

const CustomerReview = ({review}) => {
    const {name,description,img,companyName} = review;
   
    return (
        <div className='col-md-3 shadow p-4 mb-5  mr-4 text-center border'>
<img style={{borderRadius:"50%",width:"100px",marginTop:"-70px"}} className='shadow '  src={img} alt=""/>
<p className='mt-2 mb-3'><FontAwesomeIcon icon={faQuoteLeft}/>  {description} <FontAwesomeIcon  icon={faQuoteRight}/> </p>
            <h5>{name}</h5>
            <p>{companyName}</p>
            
            
        </div>
    );
};

export default CustomerReview;