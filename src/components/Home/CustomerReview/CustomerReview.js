import React, { useEffect, useState } from 'react';

const CustomerReview = ({review}) => {
    const {name,description,img} = review;
   
    return (
        <div className='col-md-3 shadow p-4  mr-4 text-center border'>
<img style={{borderRadius:"50%",width:"100px",marginTop:"-70px"}} className='shadow '  src={img} alt=""/>
<p className='mt-2 mb-3'>{description}</p>
            <h5>{name}</h5>
            
            
        </div>
    );
};

export default CustomerReview;