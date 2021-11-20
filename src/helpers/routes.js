import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";

export const useRoutes = (props) => {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/home/category/:id">
        <Home />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
