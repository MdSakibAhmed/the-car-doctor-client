import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => {
            console.log(data);

            setServices(data)
        })

    },[])
    
    return (
        <div className='mt-4'>
        <h1 className='text-center mb-5'>Our Service</h1>
        <div className='row justify-content-center'>
            {services.map(service => <Service key={service._id } service={service}></Service>)}
        </div>
        </div>
    );
};

export default Services;