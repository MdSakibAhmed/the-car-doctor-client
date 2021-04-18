import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import Order from "../Order/Order";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(`https://infinite-shelf-48964.herokuapp.com/orders?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch("https://infinite-shelf-48964.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        result && setAdmin(true);
      });
  }, []);

  return (

    <div className="row">
      <div className="col-md-2">
<Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mt-4">
      <Table striped  hover variant="dark" >
     <thead>
    <tr>
     
      <th>Name</th>
      <th>EmailID</th>
      <th>Service</th>
      <th>Pay With</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
  {orders.map((order) => (
        <Order key={order._id} isAdmin={isAdmin} order={order}></Order>
      ))}
  </tbody>
      
  </Table>
      </div>
    </div>
    
    
  );
};

export default OrderList;
