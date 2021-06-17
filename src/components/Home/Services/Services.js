import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import {Spinner} from "react-bootstrap";
const Services = () => {
    const [successDataLoad,setSuccessDataLoad] = useState(false)
    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('https://infinite-shelf-48964.herokuapp.com/services').then(res => res.json()).then(data => {
            console.log(data);
setSuccessDataLoad(true)
            setServices(data)
        })

    },[])
    
    return (

       
        <div className='mt-4'>
        <h1 style={{fontFamily:"'Rajdhani', sans-serif",textAlign:"center"}}>OUR SERVICES</h1>
        <span className="d-block" style={{width:"120px", borderBottom:"3px solid red", margin:"10px auto 30px auto"}}></span>
         <div className="container text-center">
         {!successDataLoad?<Spinner animation="border" className="mt-5" variant="danger" />:<div className='d-flex flex-column flex-md-row'>
            {services.map(service => <Service key={service._id } service={service}></Service>)}
        </div>}
         
         </div>
      
        </div>
    );
};

export default Services;