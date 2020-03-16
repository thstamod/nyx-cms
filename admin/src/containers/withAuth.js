/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const withAuth = ({ children, isLoggedIn }) => {
  const checkAuth = () => {
    console.log(isLoggedIn);
    return isLoggedIn ? (children) : (<Redirect to={{ pathname: '/auth' }} />);
  };

  return (<Route render={checkAuth} />);
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

withAuth.propTypes = {
  isLoggedIn: propTypes.bool,
  // path: propTypes.string,
  children: propTypes.element,
};

export default connect(mapStateToProps)(withAuth);
