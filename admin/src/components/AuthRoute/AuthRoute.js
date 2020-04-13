/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withFullContainer from '../../containers/withFullContainer';
import { logoutAction } from '../../redux/actions/userActions';

const AuthRoute = ({ isLoggedIn, expiration, logout, path, component }) => {
  const isActiveAuth = () => expiration > Date.now();
  const logoutFn = () => {
    logout();
    return <Redirect onEnter={logout} to="/auth" />;
  };
  return isLoggedIn && isActiveAuth() ? (
    <Route path={path} component={component} />
  ) : (
    logoutFn()
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn, expiration: user.tokenExpiration };
};

export default withFullContainer(
  connect(mapStateToProps, { logout: logoutAction })(AuthRoute)
);
