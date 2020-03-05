import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const MainNavigation = props => {
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <NavLink tag={Link} to="/">Content</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/users">Users</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}
export default MainNavigation;
