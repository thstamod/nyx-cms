import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Nav, NavItem, NavLink as RSNavLink } from 'reactstrap';
import SubMenu from './SubMenu';

const Sidebar = styled('div')`
background: #fff000;
width:200px;
color: #fff;
`
const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1"
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    }
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    }
  ]
]


const MainNavigation = props => {
  return (
    <Sidebar>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>Nyx CMS</p>
          <SubMenu title="Home" items={submenus[0]} />
          <NavItem>
            <RSNavLink tag={NavLink} to="/auth">auth</RSNavLink>
          </NavItem>
          <NavItem>
            <RSNavLink tag={NavLink} to="/users">Users</RSNavLink>
          </NavItem>
        </Nav>
      </div>
    </Sidebar>
  )
}



export default MainNavigation;
