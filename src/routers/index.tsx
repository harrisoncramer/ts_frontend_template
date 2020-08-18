import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import ViewWrapper from "../components/ViewWrapper";
import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => <ViewWrapper View={Dashboard} />} />
      <Route path="/about" render={() => <ViewWrapper View={About} />} />
      <Route render={() => <ViewWrapper View={NotFound} />} />
    </Switch>
  </Router>
);

export { AppRouter };
