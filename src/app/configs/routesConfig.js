import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "Common";
import { authConfigs } from "app/auth/pages/authConfigs";
import { appsConfigs } from "app/main/apps/appsConfigs";
import { pagesConfigs } from "app/main/pages/pagesConfigs";
import { authRoleExamplesConfigs } from "app/main/auth/authRoleExamplesConfigs";
import { UserInterfaceConfig } from "app/main/user-interface/UserInterfaceConfig";
// import { DocumentationConfig } from "app/main/documentation/DocumentationConfig";
import { CallbackConfig } from "app/main/callback/CallbackConfig";

const routeConfigs = [
  ...authConfigs,
  ...appsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,
  UserInterfaceConfig,
  // DocumentationConfig,
  CallbackConfig
];

const routes = [
  ...Utils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/apps/dashboards/analytics" />
  },
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;
