import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Calendar from "../views/Calendar";
import About from "../views/About";
import NotFound from "../views/NotFound";
//import ErrorBoundary from "../components/ErrorBoundary";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
