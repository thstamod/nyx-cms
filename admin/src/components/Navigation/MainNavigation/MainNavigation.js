import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './MainNavigation.styles.tw';

const MainNavigation = () => (
  <Header>
    <ul className="flex">
      <li className="mr-6">
        <div as={NavLink}>
          <NavLink to="/">Nyx-cms</NavLink>
        </div>
      </li>
      <li className="mr-6">
        <NavLink to="/content">Content</NavLink>
      </li>
      <li className="mr-6">
        <NavLink to="/settings">Settings</NavLink>
      </li>
      <li className="mr-6">
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </Header>
);

export default MainNavigation;
