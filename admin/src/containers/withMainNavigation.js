import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import MainNavigation from '../components/Navigation/MainNavigation';

const FullContainer = styled(Container)`
  padding-right: 0;
  padding-left: 0;
  height: 100%;
`;

const withMainNavigation = (WrappedComponent) => () => (
  <section>
    <FullContainer fluid>
      <MainNavigation />
      <WrappedComponent />
    </FullContainer>
  </section>
);

export default withMainNavigation;
