import React, { useContext } from "react";
import "./HeaderNavbar.css"
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from '../../../image/logo.png';

const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar bg="transparent" expand="lg" className="container" style={{borderBottom:"2px solid #E5EAEE"}}>
      <Navbar.Brand
        style={{ fontSize: "60px",fontFamily: 'Grenze Gotisch'}}
        className="text-white bolder  mr-5 "
        as={Link}
        to="/"
      >
       <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="ml-5 mt-4" >
          <Nav.Link
      
            as={Link}
            className="justify-content-lg-start bolder mr-2  "
            to="/"
          >
          <span className="navigation-item">Home</span>
            
          </Nav.Link>
          <Nav.Link
      
            as={Link}
            className="justify-content-lg-start bolder mr-2  "
            to="/"
          >
               <span className="navigation-item">About</span>
          </Nav.Link>
          <Nav.Link
       
            as={Link}
            className=" bolder mr-2 "
            to="/dashboard"
          >
             <span className="navigation-item">Dashboard</span>
          </Nav.Link>
          <Nav.Link
            
            as={Link}
            className="bolder mr-2 "
            to="/services"
          >
            <span className="navigation-item">Services</span>
          </Nav.Link>

         
        </Nav>
       
      </Navbar.Collapse>
      <Link  to={`${loggedInUser.email ? "/" : "/login"}`}>
      <button  className=" hvr-sweep-to-bottom shadow py-3 pb-3 p-3 border-0 login-btn">
          {loggedInUser.email ? loggedInUser.name : "Log in"}
            </button>{" "}
      </Link>
     
    </Navbar>
  );
};

export default HeaderNavbar;
