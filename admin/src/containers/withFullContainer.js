import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const FullContainer = styled(Container)`
  padding-right: 0;
  padding-left: 0;
  height: 100%;
  overflow: hidden;
  padding-top: 56px;
`;

const withFullContainer = (Component) => (props) => (
  <FullContainer fluid>
    <Component {...props} />
  </FullContainer>
);

export default withFullContainer;
