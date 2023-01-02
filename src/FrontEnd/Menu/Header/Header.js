import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className='Menu_header'>
        <Container>
          
          <Nav className="me-auto Nav_menu">
            <Nav.Link href="#home">All products</Nav.Link>
            <Nav.Link href="#features">Featured</Nav.Link>
            <Nav.Link href="#pricing">Previous Orders</Nav.Link>
            <Nav.Link href="#home">Favorite Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}




export default Header;