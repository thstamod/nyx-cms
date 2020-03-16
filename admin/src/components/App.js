import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';


import AuthPage from '../pages/AuthPage/AuthPage';
import UsersPage from '../pages/userPage/UersPage';
import WithAuth from '../containers/withAuth';


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        {/* <Route path="/" component={null} /> */}
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <WithAuth path="/users"><UsersPage /> </WithAuth>
      </Switch>

    </React.Fragment>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  const { user } = state;
  return { isLoggedIn: user.isLoggedIn };
};


export default connect(mapStateToProps)(App);
