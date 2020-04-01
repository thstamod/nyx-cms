import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNavigation = () => (
  <header>
    <Navbar data-testid="header" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Nyx-cms
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/content">
          Content
        </Nav.Link>
        <Nav.Link as={NavLink} to="/settings">
          Settings
        </Nav.Link>
        <Nav.Link as={NavLink} to="/users">
          Users
        </Nav.Link>
      </Nav>
    </Navbar>
  </header>
);

export default MainNavigation;
