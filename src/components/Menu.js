import React from 'react';
import '../App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#29335C'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#A8C686' }}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/task" style={{ color: '#A8C686' }}>Task List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;