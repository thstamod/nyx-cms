/* eslint-disable react/prop-types */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
// import SubMenu from './SubMenu';

const Text = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  width: 100%;
  color: ${(props) => props.theme.colors.powderWhite};
`;

const ListView = ({ data }) => {
  const showDocumentTypes = () => {
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
