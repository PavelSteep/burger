import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="https://bpv535.artstation.com/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link href="https://bpv535.artstation.com/" target="_blank" rel="noopener noreferrer">
                <div className="cart">
                  <i className="bi bi-box"></i>
                  <span>  ArtStation  </span>
                </div>
              </Nav.Link>       
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
