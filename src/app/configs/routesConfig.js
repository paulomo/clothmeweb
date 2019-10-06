import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "Common";
import { authConfigs } from "app/auth/pages/authConfigs";
import { pagesConfigs } from "app/page/pagesConfigs";
import { UserInterfaceConfig } from "app/page/user-interface/UserInterfaceConfig";
import { CallbackConfig } from "app/page/callback/CallbackConfig";

const routeConfigs = [
  ...authConfigs,
  ...pagesConfigs,
  UserInterfaceConfig,
  CallbackConfig
];

var authRoute = Utils.generateRoutesFromConfigs(routeConfigs);
console.log(authRoute);

const routes = [
  ...Utils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/apps/dashboards/project" />
  },
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;
