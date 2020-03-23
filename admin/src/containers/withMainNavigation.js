import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MainNavigation from '../components/Navigation/MainNavigation';

const withMainNavigation = (WrappedComponent) => () => (
  <div>
    <MainNavigation />
    <Container fluid>
      <Row>
        <Col>
          <WrappedComponent />
        </Col>
      </Row>
    </Container>
  </div>
);

export default withMainNavigation;
