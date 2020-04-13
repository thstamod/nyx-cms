/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import withFullContainer from '../../containers/withFullContainer';
import { logoutAction } from '../../redux/actions/userActions';

const AuthRoute = ({ path, component }) => {
  const { isLoggedIn, tokenExpiration } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isActiveAuth = () => tokenExpiration > Date.now();
  const logoutFn = () => {
    dispatch(logoutAction());
    return <Redirect to="/auth" />;
  };
  return isLoggedIn && isActiveAuth() ? (
    <Route path={path} component={component} />
  ) : (
    logoutFn()
  );
};

export default withFullContainer(AuthRoute);
