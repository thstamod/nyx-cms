import React from 'react';
import { FullContainer } from '../styles/basicLayout.styles.tw';

const withFullContainer = (Component) => (props) => (
  <FullContainer>
    <Component {...props} />
  </FullContainer>
);

export default withFullContainer;
