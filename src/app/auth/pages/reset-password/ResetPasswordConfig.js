import React from "react";
import { authRoles } from "app/auth";

export const ResetPasswordConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  auth: authRoles.user,
  routes: [
    {
      path: "/pages/auth/reset-password",
      component: React.lazy(() => import("./ResetPassword"))
    }
  ]
};
