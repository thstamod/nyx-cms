import React from 'react';
import { NavLink } from 'react-router-dom'

const MainNavigation = props => {
  return (
    <div>
      <h5>Nav</h5>
      <ul>
        <li><NavLink to="/">Content</NavLink>
        </li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
    </div>
  )
}
export default MainNavigation;
