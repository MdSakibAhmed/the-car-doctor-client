import React from 'react';
import { Button } from 'react-bootstrap';

const ServiceList = ({service}) => {
    const {title,price,description,_id} = service;
    const handleDelete = id => {
    fetch(`http://localhost:5000/deleteService/${id}`,{
        method:"DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'} // Indicates the content 
           

    }).then(res => res.json()).then(result => {
        console.log(result)
    })
    }
    return (
      <>
      <tr>
          <td>{title}</td>
          <td>${price}</td>
          <td><Button variant='danger' onClick={() => handleDelete(_id)}>delete</Button></td>
      </tr>      
        </>
    );
};

export default ServiceList;