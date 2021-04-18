import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => setServices(data))
    },[services])
    return (
        <div className='row'>
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-4">
        <Table striped hover variant='dark'>
        <thead>
    <tr>
      
      <th>Service Name</th>
      <th>Service Charge</th>
      <th>Action</th>
    </tr>
    
  </thead>
  <tbody>
  {services.map(service => <ServiceList key={service._id} service={service}></ServiceList>)}
    </tbody>

        </Table>
       
        </div >
        .
          
        </div>
    );
};

export default ManageServices;