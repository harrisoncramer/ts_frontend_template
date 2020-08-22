/* istanbul ignore file */

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import history from "../history";

import ViewWrapper from "../components/ViewWrapper";
import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";
//import ErrorBoundary from "../components/ErrorBoundary";

const AppRouter = () => (
  <Router history={history}>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route path="/" exact render={() => <ViewWrapper View={Dashboard} />} />
        <Route path="/about" render={() => <ViewWrapper View={About} />} />
        <Route render={() => <ViewWrapper View={NotFound} />} />
      </Switch>
    </QueryParamProvider>
  </Router>
);

export { AppRouter };
