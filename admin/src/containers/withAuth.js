/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const withAuth = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (rest.isLoggedIn ? children : <Redirect to="/auth" />)}
  />
);

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

withAuth.propTypes = {
  isLoggedIn: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default connect(mapStateToProps)(withAuth);
