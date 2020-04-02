/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withFullContainer from '../../containers/withFullContainer';

const AuthRoute = ({ isLoggedIn, path, component }) =>
  isLoggedIn ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/auth" />
  );

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

export default withFullContainer(connect(mapStateToProps)(AuthRoute));
