import React from 'react';
import MainNavigation from '../components/Navigation/MainNavigation';

const withMainNavigation = (WrappedComponent) => () => (
  <MainNavigation>
    <WrappedComponent />
  </MainNavigation>
);


export default withMainNavigation;
