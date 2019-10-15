import { authRoles } from "app/auth";

const navigationConfig = [
  {
    id: "dashboards",
    title: "Dashboards",
    type: "item",
    icon: "dashboard",
    url: "/apps/dashboards/project"
  },
  {
    id: "e-commerce",
    title: "Product",
    type: "collapse",
    icon: "shopping_basket",
    url: "/apps/e-commerce",
    children: [
      {
        id: "e-commerce-products",
        title: "Products",
        type: "item",
        url: "/apps/e-commerce/products",
        exact: true
      },
      {
        id: "e-commerce-new-product",
        title: "New Product",
        type: "item",
        url: "/apps/e-commerce/products/new",
        exact: true
      }
    ]
  },
  {
    id: "e-commerce-sale",
    title: "Sale",
    type: "collapse",
    icon: "shopping_cart",
    url: "/apps/e-commerce",
    children: [
      {
        id: "e-commerce-pending",
        title: "Orders",
        type: "item",
        url: "/apps/e-commerce/orders",
        exact: true
      }
    ]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics",
    type: "collapse",
    icon: "dashboard",
    children: [
      {
        id: "project-dashboard",
        title: "Project",
        type: "item",
        url: "/apps/dashboards/analytics"
      }
    ]
  },
  {
    id: "profile",
    title: "User Profile",
    type: "collapse",
    icon: "person",
    url: "/pages",
    children: [
      {
        id: "profile",
        title: "Profile",
        type: "item",
        url: "/pages/profile"
      },
      {
        id: "message",
        title: "Message",
        type: "item",
        url: "/apps/message"
      },
      {
        id: "wallet",
        title: "Wallet",
        type: "item",
        auth: authRoles.user,
        icon: "account_balance_wallet",
        url: "/pages/maintenance"
      }
    ]
  },
  {
    id: "pages",
    title: "Pages",
    type: "group",
    icon: "pages",
    children: [
      {
        id: "authentication-forgot-password-v2",
        title: "Forgot Password v2",
        type: "item",
        url: "/pages/auth/forgot-password"
      },
      {
        id: "authentication-reset-password-v2",
        title: "Reset Password v2",
        type: "item",
        url: "/pages/auth/reset-password"
      },
      {
        id: "errors",
        title: "Errors",
        type: "collapse",
        icon: "error",
        children: [
          {
            id: "404",
            title: "404",
            type: "item",
            url: "/pages/errors/error-404"
          },
          {
            id: "500",
            title: "500",
            type: "item",
            url: "/pages/errors/error-500"
          }
        ]
      }
    ]
  },
  {
    type: "divider",
    id: "divider-1"
  },
  {
    id: "auth",
    title: "Auth",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "signin",
        title: "Signin",
        type: "item",
        url: "/signin",
        icon: "lock"
      },
      {
        id: "signup",
        title: "Signup",
        type: "item",
        url: "/signup",
        icon: "person_add"
      },
      {
        id: "logout",
        title: "Logout",
        type: "item",
        url: "/logout",
        icon: "exit_to_app"
      }
    ]
  }
];

export default navigationConfig;
