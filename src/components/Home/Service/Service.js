import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const {title,description,img,_id} = service;
    const history = useHistory()
 
   
    return (
        <div className='col-md-3 mr-5   border shadow justify-content-center '>
        <img className="img-fluid" src={img} alt=""/>
            <h2 className="mt-2 mb-2">{title}</h2>
            <p style={{textAlign:"justify"}}>{description}</p>

            
            
            <Button style={{fontSize:"16px"}} variant='danger' onClick={()=> history.push(`/orderNow/${_id}`)}>GET THIS SERVICE</Button><span  style={{color:"red",fontSize:"20px",marginLeft:"100px",fontWeight:"bold"}} className=' text-danger d-inline-block'>$400</span>
        </div>
    );
};

export default Service;