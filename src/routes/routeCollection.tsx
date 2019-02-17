import LandingPage from "@containers/landingPage/landingPage";
import NotFoundPage from "@containers/notFoundPage/notFoundPage";
import React from "react";
import { Route, Switch } from "react-router";

const RouteCollection: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default RouteCollection;
