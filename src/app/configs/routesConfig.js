import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "app/Common";
import { authConfigs } from "app/auth/pages/authConfigs";
import { pagesConfigs } from "app/page/pagesConfigs";
import { UserInterfaceConfig } from "app/page/user-interface/UserInterfaceConfig";

const routeConfigs = [
  ...authConfigs,
  ...pagesConfigs,
  UserInterfaceConfig,
];

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
