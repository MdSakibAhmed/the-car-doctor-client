import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import HeaderNavbar from "../../Home/HeaderNavbar/HeaderNavbar";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const OrderProcess = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(`https://infinite-shelf-48964.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [serviceId]);

  const saveOrderOnDatabase = (card) => {
    const orderObj = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      title: service.title,
      price: service.price,
      status: "pending",
      payWith: card,
    };
    fetch("https://infinite-shelf-48964.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(orderObj),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div style={{ background: "rgba(0, 0, 0, 0.13)", height: "100vh" }}>
      <div style={{ background: "" }} className="pt-5  row">
        <div className="col-md-2">
          <Sidebar serviceId={service._id}></Sidebar>
        </div>

        {service.title ? (
          <>
            {" "}
            <div className="border rounded col-md-4 ml-4 mr-4  shadow">
              <h4>Customer information</h4>
              <p>
                {" "}
                <span style={{ fontWeight: "bold" }}>Name: </span>{" "}
                {loggedInUser.name}
              </p>
              <p>
                {" "}
                <span style={{ fontWeight: "bold" }}>Email: </span>{" "}
                {loggedInUser.email}
              </p>
            </div>
            <div className="border rounded p-5 p-md-4 col-md-5 shadow">
              <h4>Order Detailed</h4>
              <p>
                Service Name:{" "}
                <span style={{ fontWeight: "bold" }}>{service.title}</span>{" "}
              </p>
              <p>
                Service Charge:{" "}
                <span style={{ fontWeight: "bold" }}>${service.price}</span>{" "}
              </p>
              <h6 className="mb-3">Pay with credit card</h6>
              <ProcessPayment
                saveOrderOnDatabase={saveOrderOnDatabase}
              ></ProcessPayment>
            </div>
          </>
        ) : (
          <h1 className="d-inline-block">Please select at first a service </h1>
        )}
      </div>
    </div>
  );
};

export default OrderProcess;
