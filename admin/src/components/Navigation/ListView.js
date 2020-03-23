/* eslint-disable react/prop-types */
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
// import SubMenu from './SubMenu';

// const Sidebar = styled('div')`
//   background: #fff000;
//   width: 200px;
//   color: #fff;
// `;

const ListView = ({ data }) => {
  const showDocumentTypes = () => {
    console.log(data.documentTypes);
    const list = data.documentTypes.map((el) => (
      <span key={el._id}>{el.name}</span>
    ));
    return list;
  };
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
      {showDocumentTypes()}
    </Nav>
  );
};

export default ListView;
