import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "Common";
import { authConfigs } from "app/auth/pages/authConfigs";
import { appsConfigs } from "app/page/appsConfigs";
import { pagesConfigs } from "app/page/pages/pagesConfigs";
import { authRoleExamplesConfigs } from "app/page/auth/authRoleExamplesConfigs";
import { UserInterfaceConfig } from "app/page/user-interface/UserInterfaceConfig";
import { CallbackConfig } from "app/page/callback/CallbackConfig";

const routeConfigs = [
  ...authConfigs,
  ...appsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,
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
    component: () => <Redirect to="/signin" />
  },
  {
    // component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;
