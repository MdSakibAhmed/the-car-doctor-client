import { useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import {DropdownButton,Dropdown}from "react-bootstrap"
import { UserContext } from '../../../App';

const Order = ({order,isAdmin}) => {
    const {title,name,service,img,email,status,_id,payWith} = order;
    const [value,setValue] = useState(status)
   
    const handleSelect = e => {
        console.log(e);
        setValue(e)
    }
    
    useEffect(()=> {

        fetch(`https://infinite-shelf-48964.herokuapp.com/updateStatus/${_id}`,{
            method:"PATCH",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({status:value})
        }).then(res => res.json()).then(result => {
            console.log(result);

        })

    },[value])
    return (
       
         <tr>
      <td >{name}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{payWith}</td>
      <td>{<DropdownButton
      alignLeft
      title={isAdmin?value:status}
      variant={value==='pending'?'danger':value==='On going'?'info':'success'}
      id="dropdown-menu-align-left"
      onSelect={handleSelect}
        >
        {isAdmin && <>  <Dropdown.Item variant='white' eventKey="Pending">pending</Dropdown.Item>
              <Dropdown.Item eventKey="On going">On going</Dropdown.Item>
              <Dropdown.Item eventKey="Done">Done</Dropdown.Item></>}
             
             
              </DropdownButton>}</td>
    </tr>
        

           
       
    );
};

export default Order;