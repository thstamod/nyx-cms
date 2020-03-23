import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RSNavLink,
} from 'react-bootstrap';

const MainNavigation = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Nyx Cms</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <RSNavLink tag={NavLink} to="/content">
            Content
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink tag={NavLink} to="/users">
            Users
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink tag={NavLink} to="/Settings">
            Settings
          </RSNavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default MainNavigation;
