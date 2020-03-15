import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import AuthPage from '../pages/Auth';
import UsersPage from '../pages/Uers';
import MainNavigation from './Navigation/MainNavigation'




const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <Switch>
          {/* <Route path="/" component={null} /> */}
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/users" component={UsersPage} />
        </Switch>

      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
