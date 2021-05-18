import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('https://infinite-shelf-48964.herokuapp.com/services').then(res => res.json()).then(data => {
            console.log(data);

            setServices(data)
        })

    },[])
    
    return (
        <div className='mt-4'>
        <h1 style={{fontFamily: 'Grenze Gotisch',fontSize:"55px"}}
         className='text-center mb-5'>
         <span style={{borderBottom:'5px dashed red'}}>Our Services</span>
         </h1>
        <div className='row justify-content-center'>
            {services.map(service => <Service key={service._id } service={service}></Service>)}
        </div>
        </div>
    );
};

export default Services;