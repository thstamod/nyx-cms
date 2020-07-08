import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const MainNavigation = () => (
  <header className={styles.header}>
    <ul className="row">
      <li className="col-xs">
        <div as={NavLink}>
          <NavLink to="/">Nyx-cms</NavLink>
        </div>
      </li>
      <li className="col-xs">
        <NavLink to="/content">Content</NavLink>
      </li>
      <li className="col-xs">
        <NavLink to="/settings">Settings</NavLink>
      </li>
      <li className="col-xs">
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </header>
);

export default MainNavigation;
