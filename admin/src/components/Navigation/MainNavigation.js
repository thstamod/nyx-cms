import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RSNavLink,
} from 'reactstrap';


const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nyx Cms</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <RSNavLink tag={NavLink} to="/content">Content</RSNavLink>
            </NavItem>
            <NavItem>
              <RSNavLink tag={NavLink} to="/users">Users</RSNavLink>
            </NavItem>
            <NavItem>
              <RSNavLink tag={NavLink} to="/Settings">Settings</RSNavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavigation;
