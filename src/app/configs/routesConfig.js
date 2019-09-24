import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "Common";
import { appsConfigs } from "app/main/apps/appsConfigs";
import { pagesConfigs } from "app/main/pages/pagesConfigs";
import { authRoleExamplesConfigs } from "app/main/auth/authRoleExamplesConfigs";
import { UserInterfaceConfig } from "app/main/user-interface/UserInterfaceConfig";
// import { DocumentationConfig } from "app/main/documentation/DocumentationConfig";
import { LoginConfig } from "app/main/login/LoginConfig";
import { SignupConfig } from "app/main/signup/SignupConfig";
import { LogoutConfig } from "app/main/logout/LogoutConfig";
import { CallbackConfig } from "app/main/callback/CallbackConfig";

const routeConfigs = [
  ...appsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,
  UserInterfaceConfig,
  // DocumentationConfig,
  LoginConfig,
  SignupConfig,
  LogoutConfig,
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
