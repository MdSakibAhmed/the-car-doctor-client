import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faQuoteRight,faQuoteLeft} from "@fortawesome/free-solid-svg-icons"

const CustomerReview = ({review}) => {
    const {name,description,img,companyName} = review;
   
    return (
        <div style={{height:"100%", background:"#F2F7F7"}} className=' shadow px-3 pt-3 mb-5  mr-4 text-center border d-flex justify-content-between align-items-center flex-column'>
<img style={{borderRadius:"50%",width:"100px",marginTop:"0"}} className='shadow ' src={img} alt=""/>
<p className='mt-2 mb-3'><FontAwesomeIcon icon={faQuoteLeft}/>  {description} <FontAwesomeIcon  icon={faQuoteRight}/> </p>
            <h5>{name}</h5>
            <p>{companyName}</p>
            
            
        </div>
    );
};

export default CustomerReview;