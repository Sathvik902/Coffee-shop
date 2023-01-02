import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'


function Home() {
  return (
    <Navbar bg="dark" expand="lg" id='navbarfull' > 
      <Container className='navbar'>
        <Link to="/" id='Logo'>CoffeeDay</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
          <Link id='nav-links1' to="/Menu">Menu</Link>
          <Link id='nav-links1' to="/Contact">Contact</Link>
          <Link id='nav-links1' to="Booking">Book a table</Link>
        </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links1 ">
          <Link id='nav-links2' to="/signup">Sign in</Link>
          <Link id='nav-links2' to="/login">Join now</Link>
          <Link id='nav-links2' to="/location">Find a store</Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
