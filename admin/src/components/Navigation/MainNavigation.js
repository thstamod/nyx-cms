import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNavigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">
      Nyx-cms
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/content">
        Content
      </Nav.Link>
      <Nav.Link as={Link} to="/settings">
        Settings
      </Nav.Link>
      <Nav.Link as={Link} to="/users">
        Users
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default MainNavigation;
