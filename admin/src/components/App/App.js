import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { Container } from 'react-bootstrap';
import AuthPage from '../../pages/AuthPage/AuthPage';
import UsersPage from '../../pages/UserPage/UserPage';
import ContentPage from '../../pages/ContentPage/ContentPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import NotFound from '../../pages/NotFound/NotFound';
import AuthRoute from '../AuthRoute/AuthRoute';
import store from '../../redux/store';
import { setSessionStorage } from '../../utils/handleSessionStorage';
import GlobalStyles from '../../theme/globalStyle';
import theme from '../../theme/index';
import MainNavigation from '../Navigation/MainNavigation/MainNavigation';

// eslint-disable-next-line no-unused-vars
const FullContainer = styled(Container)`
  padding-right: 0;
  padding-left: 0;
  height: 100%;
  overflow: hidden;
  padding-top: 56px;
`;

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
            {isLoggedIn && (
              <AuthRoute path="/content" component={ContentPage} />
            )}
            {isLoggedIn && (
              <AuthRoute path="/settings" component={SettingsPage} />
            )}
            {isLoggedIn && <AuthRoute path="/users" component={UsersPage} />}
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};

export default connect(mapStateToProps)(App);
