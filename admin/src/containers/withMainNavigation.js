import React from 'react';
import MainNavigation from '../components/Navigation/MainNavigation';

const withMainNavigation = (WrappedComponent) => () => (
  <div> <MainNavigation />
    <WrappedComponent />
  </div>
);


export default withMainNavigation;
