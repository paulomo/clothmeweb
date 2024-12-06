import React from "react";
import { Redirect } from "react-router-dom";
import { authRoles } from "app/auth";

export const OrderPageConfig = {
  settings: {
    layout: {}
  },
  // auth: authRoles.user, //['user']s
  routes: [
    {
      path: "/apps/orders/:orderId",
      component: React.lazy(() => import("./order/Order"))
    },
    {
      path: "/apps/orders",
      component: React.lazy(() => import("./orders/Orders"))
    },
    {
      path: "/apps/e-commerce",
      component: () => <Redirect to="/apps/e-commerce/products" />
    }
  ]
};
