/* eslint-disable react/prop-types */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
// import SubMenu from './SubMenu';

// const Sidebar = styled('div')`
//   background: #fff000;
//   width: 200px;
//   color: #fff;
// `;

const Text = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  background: #fff000;
  width: 200px;
  color: ${(props) => props.theme.colors.lightBlue};
`;

const ListView = ({ data }) => {
  const showDocumentTypes = () => {
    // console.log(theme);
    const list = data.documentTypes.map((el) => (
      <Text key={el._id}>{el.name}</Text>
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
