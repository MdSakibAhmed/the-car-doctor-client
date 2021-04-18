import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({service}) => {
    const {title,description,price,img,_id} = service;
    const history = useHistory()
 
   
    return (
        <div   className='col-md-3 ml-3 ml-md-0 mr-5 service-animation d-flex justify-content-between flex-column mb-4 pb-3 border shadow '>
     
        <img  className="img-fluid service-img" src={img} alt=""/>
            <h2 className="pt-2 pl-2 pr-2 pb-2 service-title">{title}</h2>
            <p className='p-2 service-description' style={{textAlign:"justify"}}>{description}</p>

            
            
            <div className='bg-dark  order-button'>
            <Button style={{fontSize:"16px"}} variant='danger' onClick={()=> history.push(`/orderNow/${_id}`)}>GET THIS SERVICE</Button><span  style={{color:"white",fontSize:"20px",marginLeft:"100px",fontWeight:"bold"}} className=' text-white d-inline-block'>$ {price}</span>
            </div>
            
           
        </div>
    );
};

export default Service;