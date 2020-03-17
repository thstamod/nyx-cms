/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';


const withAuth = ({ component: Component, ...rest }) => (
  <Route
    {
    ...rest}
    render={(props) => (
      rest.isLoggedIn
        ? <Component {...props} />
        : <Redirect to="/auth" />
    )}
  />
);

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

withAuth.propTypes = {
  isLoggedIn: propTypes.bool,
  component: propTypes.element,
};

export default connect(mapStateToProps)(withAuth);
