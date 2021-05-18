import React, { useContext } from "react";
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

const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar bg="transparent" expand="lg" className="container pt-4">
      <Navbar.Brand
        style={{ fontSize: "60px",fontFamily: 'Grenze Gotisch'}}
        className="text-white bolder "
        as={Link}
        to="/"
      >
        The Car Doctor
      </Navbar.Brand>
      <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="text-white" id="basic-navbar-nav">
        <Nav className="ml-auto text-white">
          <Nav.Link
            style={{ fontSize: "19px" }}
            as={Link}
            className="text-white bolder "
            to="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ fontSize: "19px" }}
            as={Link}
            className="text-white bolder"
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            style={{ fontSize: "19px" }}
            as={Link}
            className="text-white bolder"
            to="/services"
          >
            Services
          </Nav.Link>

          <Nav.Link
            style={{ fontSize: "19px" }}
            as={Link}
            className="text-white bolder"
            to={`${loggedInUser.email ? "/" : "/login"}`}
          >
            {" "}
            <button className="btn-primary pl-2 pr-2 border-0 rounded">
              {loggedInUser.email ? loggedInUser.name : "Log in"}
            </button>{" "}
          </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;
