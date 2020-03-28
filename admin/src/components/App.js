import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import AuthPage from '../pages/AuthPage/AuthPage';
import UsersPage from '../pages/UserPage/UersPage';
import ContentPage from '../pages/ContentPage/ContentPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import NotFound from '../pages/NotFound/NotFound';
import WithAuth from '../containers/withAuth';
import store from '../redux/store';
import { setSessionStorage } from '../utils/handleSessionStorage';
import GlobalStyles from '../theme/globalStyle';
import theme from '../theme/index';
import MainNavigation from './Navigation/MainNavigation';

const App = ({ isLoggedIn }) => {
  useEffect(() => {
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      setSessionStorage(store);
    });
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {isLoggedIn && <MainNavigation />}
        <React.Fragment>
          <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/auth" component={AuthPage} />
            <WithAuth path="/content">
              <ContentPage />
            </WithAuth>
            <WithAuth path="/settings">
              <SettingsPage />
            </WithAuth>
            <WithAuth path="/users">
              <UsersPage />
            </WithAuth>
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

export default connect(mapStateToProps)(App);
