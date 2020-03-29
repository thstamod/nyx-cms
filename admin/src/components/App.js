import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import { Container } from 'react-bootstrap';
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
          <FullContainer fluid>
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
          </FullContainer>
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
