import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncPage = asyncComponent(() => import("./containers/Page"));
const AsyncDefault = asyncComponent(() => import("./containers/Default"));

export default ({ childProps }) =>
<Switch>
  <Route
    path="/"
    exact
    component={AsyncHome}
    props={childProps}
  />
  <Route
    path="/sub-page"
    exact
    component={AsyncPage}
    props={childProps}
  />
  <Route component={AsyncDefault} />
</Switch>
