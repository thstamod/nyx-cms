import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';


import AuthPage from '../pages/AuthPage/AuthPage';
import UsersPage from '../pages/userPage/UersPage';
import NotFound from '../pages/notFound/notFound';
import WithAuth from '../containers/withAuth';


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        {/* {!isLoggedIn && <Redirect from="*" to="/auth" exact />}
        {!isLoggedIn && <Route path="/auth" component={AuthPage} />}
        {isLoggedIn && <Redirect from="/auth" to="/users" exact />}
        {isLoggedIn && <WithAuth path="/users"><UsersPage /></WithAuth>} */}
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <WithAuth path="/users" component={UsersPage} />
        <Route path="*" component={NotFound} />
      </Switch>

    </React.Fragment>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};


export default connect(mapStateToProps)(App);
