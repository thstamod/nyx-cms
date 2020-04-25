import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthPage from '../../pages/AuthPage/AuthPage';
import UsersPage from '../../pages/UserPage/UserPage';
import ContentPage from '../../pages/ContentPage/ContentPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import NotFound from '../../pages/NotFound/NotFound';
import AuthRoute from '../AuthRoute/AuthRoute';
import GlobalStyles from '../../theme/globalStyle';
import theme from '../../theme/index';
import MainNavigation from '../Navigation/MainNavigation/MainNavigation';
import { useAppState } from '../../context/AppContext';

const App = () => {
  const [{ isLoggedIn }] = useAppState();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {isLoggedIn && <MainNavigation />}
        <React.Fragment>
          <Switch>
            {!isLoggedIn ? (
              <Redirect from="/" to="/auth" exact />
            ) : (
              <Redirect from="/" to="/content" exact />
            )}
            {!isLoggedIn && <Route path="/auth" component={AuthPage} />}
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

export default App;
