
import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const HeaderNavbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
     
    // <Nav className="mr-auto">
    //   <Nav.Link href="#home">Home</Nav.Link>
    //   <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
    //   <Nav.Link as={Link} to="/addReview">Add Review</Nav.Link>
    //   <Nav.Link href="#pricing">Pricing</Nav.Link>
    // </Nav>
    <Navbar bg="transparent" expand="lg" className='container pt-4'>
  <Navbar.Brand  style={{fontSize:"30px"}} className="text-white bolder " as={Link} to="/">The Car Doctor</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-5 text-white">
      <Nav.Link style={{fontSize:"18px"}} as={Link} className="text-white bolder " to="/">Home</Nav.Link>
      <Nav.Link style={{fontSize:"18px"}} as={Link} className="text-white bolder" to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link style={{fontSize:"18px"}} as={Link} className="text-white bolder" to="/services">Services</Nav.Link>

      <Nav.Link style={{fontSize:"18px"}} as={Link} className="text-white bolder" to={`${loggedInUser.email?'/':'/login'}`}> <button className='btn-primary pl-2 pr-2 border-0 rounded'>{loggedInUser.email?loggedInUser.name:'Log in'}</button> </Nav.Link>

      {/* <NavDropdown  style={{fontSize:"18px",color:"white"}} title="Dropdown" id="basic-nav-dropdown">
       
        <NavDropdown.Item className="text-white bolder " as={Link} href="/">Profile</NavDropdown.Item>
        <NavDropdown.Item className="text-white bolder " as={Link} to="/">Log out</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form className='ml-5' inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    
    </Form>
  </Navbar.Collapse>
</Navbar>
   

    );
};

export default HeaderNavbar;