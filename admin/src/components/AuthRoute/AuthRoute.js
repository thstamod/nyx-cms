/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import withFullContainer from '../../containers/withFullContainer/withFullContainer';
import { logoutAction } from '../../state/actions/userActions';
import { removeItemSessionStorage } from '../../utils/handleSessionStorage';
import { useAppState } from '../../context/AppContext';

const AuthRoute = ({ component: Component, ...rest }) => {
  const [{ isLoggedIn, tokenExpiration }, dispatch] = useAppState();
  const isActiveAuth = () => isLoggedIn && tokenExpiration > Date.now();
  useEffect(() => {
    if (!isActiveAuth()) {
      removeItemSessionStorage('user');
      dispatch(logoutAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActiveAuth()]);

  return (
    <Route
      {...rest}
      render={() =>
        isActiveAuth() ? <Component /> : <Redirect to={{ pathname: '/auth' }} />
      }
    />
  );
};

export default withFullContainer(AuthRoute);
