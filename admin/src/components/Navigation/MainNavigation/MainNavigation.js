import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.scss';

const MainNavigation = () => (
  <header className={styles.header}>
    <ul className={cx('row', styles.menu)}>
      {/* <li className="col-xs">
        <div as={NavLink}>
          <NavLink to="/">Nyx-cms</NavLink>
        </div>
      </li> */}
      <li className={styles.menu__item}>
        <NavLink activeClassName={styles.active} to="/content">
          Content
        </NavLink>
      </li>
      <li className={styles.menu__item}>
        <NavLink activeClassName={styles.active} to="/settings">
          Settings
        </NavLink>
      </li>
      <li className={styles.menu__item}>
        <NavLink activeClassName={styles.active} to="/users">
          Users
        </NavLink>
      </li>
    </ul>
  </header>
);

export default MainNavigation;
