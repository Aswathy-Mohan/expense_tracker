import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route, Redirect } from "react-router";
import App from "../App";
import Login from "../components/login/login";
import Registration from "../components/registration";

export const Routes = () => {
  return (
    <Router>
      <Fragment>
        <App>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </App>
      </Fragment>
    </Router>
  );
};
export default Routes;
