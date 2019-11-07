import React from "react";
import { Redirect } from "react-router-dom";
import { authRoles } from "app/auth";

export const ProductPageConfig = {
  settings: {
    layout: {}
  },
  // auth: authRoles.user, //['user']s
  routes: [
    {
      path: "/apps/products/:productId/:productHandle?",
      component: React.lazy(() => import("./product/Product"))
    },
    {
      path: "/apps/products",
      component: React.lazy(() => import("./products/Products"))
    },
    {
      path: "/apps/e-commerce",
      component: () => <Redirect to="/apps/products" />
    }
  ]
};
