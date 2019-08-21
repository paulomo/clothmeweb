import {authRoles} from 'app/auth';

const navigationConfig = [
    {
        'id'      : 'dashboards',
        'title'   : 'Dashboards',
        'type'    : 'item',
        'icon'    : 'dashboard',
    },
    {
        'id'      : 'e-commerce',
        'title'   : 'Product',
        'type'    : 'collapse',
        'icon'    : 'shopping_basket',
        'url'     : '/apps/e-commerce',
        'children': [
            {
                'id'   : 'e-commerce-products',
                'title': 'Products',
                'type' : 'item',
                'url'  : '/apps/e-commerce/products',
                'exact': true
            },
            {
                'id'   : 'e-commerce-new-product',
                'title': 'New Product',
                'type' : 'item',
                'url'  : '/apps/e-commerce/products/new',
                'exact': true
            },
        ]
    },
    {
        'id'      : 'e-commerce',
        'title'   : 'Sale',
        'type'    : 'collapse',
        'icon'    : 'shopping_cart',
        'url'     : '/apps/e-commerce',
        'children': [
          {
              'id'   : 'e-commerce-pending',
              'title': 'Pending',
              'type' : 'item',
              'url'  : '/apps/e-commerce/orders',
              'exact': true
          },
        //   {
        //       'id'   : 'e-commerce-orders',
        //       'title': 'Orders',
        //       'type' : 'item',
        //       'url'  : '/apps/e-commerce/orders',
        //       'exact': true
        //   }
        ]
    },
    {
        'id'   : 'analytics-dashboard',
        'title': 'Analytics',
        'type' : 'collapse',
        'icon' : '',
        'url'  : '/apps/dashboards/analytics',
        'children' : [
          {
              'id'   : 'project-dashboard',
              'title': 'Project',
              'type' : 'item',
              'icon' : '',
              'url'  : '/apps/dashboards/project'
          },
        ]
    },
    {
        'id' : 'company',
        'title' : 'Company',
        'type'  : 'group',
        'icon'  : '',
        'children' : [
          {
              'id'   : 'profile',
              'title': 'User Profile',
              'type' : 'collapse',
              'icon' : 'person',
              'url'  : '/pages',
              'children' : [
                {
                    'id'   : 'profile',
                    'title': 'Profile',
                    'type' : 'item',
                    'url'  : '/pages/profile',
                },
                {
                    'id'   : 'chat',
                    'title': 'Chat',
                    'type' : 'item',
                    'url'  : '/apps/chat',
                    'badge': {
                        'title': 13,
                        'bg'   : 'rgb(9, 210, 97)',
                        'fg'   : '#FFFFFF'
                    }
                },
                {
                    'id'   : 'todo',
                    'title': 'To-Do',
                    'type' : 'item',
                    'url'  : '/apps/todo',
                    'badge': {
                        'title': 3,
                        'bg'   : 'rgb(255, 111, 0)',
                        'fg'   : '#FFFFFF'
                    }
                },
                {
                    'id'   : 'notes',
                    'title': 'Notes',
                    'type' : 'item',
                    'url'  : '/apps/notes'
                },
                {
                    'id'   : 'calendar',
                    'title': 'Calendar',
                    'type' : 'item',
                    'url'  : '/apps/calendar'
                },

                {
                    'id'   : 'mail',
                    'title': 'Mail',
                    'type' : 'item',
                    'url'  : '/apps/mail',
                    'badge': {
                        'title': 25,
                        'bg'   : '#F44336',
                        'fg'   : '#FFFFFF'
                    }
                },
              ]
          },

          {
              'id'   : 'contacts',
              'title': 'Contacts',
              'type' : 'item',
              'icon' : 'people_outline',
              'url'  : '/apps/contacts/all'
          },
          {
              'id'   : 'wallet',
              'title': 'Wallet',
              'type': 'item',
              'auth' : authRoles.admin,
              'icon' : 'account_balance_wallet',
              'url'  : '/pages/maintenance'
          },
        ]
    },
    {
        'id'      : 'pages',
        'title'   : 'Pages',
        'type'    : 'group',
        'icon'    : 'pages',
        'children': [
            {
                'id'   : 'authentication-forgot-password-v2',
                'title': 'Forgot Password v2',
                'type' : 'item',
                'url'  : '/pages/auth/forgot-password'
            },
            {
                'id'   : 'authentication-reset-password-v2',
                'title': 'Reset Password v2',
                'type' : 'item',
                'url': '/pages/auth/reset-password',
                
            },
            {
                'id'   : 'authentication-lock-screen',
                'title': 'Lock Screen',
                'type' : 'item',
                'url'  : '/pages/auth/lock'
            },
            {
                'id'   : 'authentication-mail-confirmation',
                'title': 'Mail Confirmation',
                'type' : 'item',
                'url'  : '/pages/auth/mail-confirm'
            },
            {
                'id'   : 'coming-soon',
                'title': 'Coming Soon',
                'type' : 'item',
                'icon' : 'alarm',
                'url'  : '/pages/coming-soon'
            },
            {
                'id'      : 'errors',
                'title'   : 'Errors',
                'type'    : 'collapse',
                'icon'    : 'error',
                'children': [
                    {
                        'id'   : '404',
                        'title': '404',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-404'
                    },
                    {
                        'id'   : '500',
                        'title': '500',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-500'
                    }
                ]
            },
            {
                'id'   : 'maintenance',
                'title': 'Maintenance',
                'type' : 'item',
                'icon' : 'build',
                'url'  : '/pages/maintenance'
            },
        ]
    },
    {
        'type': 'divider',
        'id'  : 'divider-1'
    },
    {
        'id'      : 'auth',
        'title'   : 'Auth',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'login',
                'title': 'Login',
                'type' : 'item',
                'url'  : '/login',
                auth   : authRoles.onlyGuest,
                'icon' : 'lock'
            },
            {
                'id'   : 'register',
                'title': 'Register',
                'type' : 'item',
                'url'  : '/register',
                auth   : authRoles.onlyGuest,
                'icon' : 'person_add'
            },
            {
                'id'   : 'logout',
                'title': 'Logout',
                'type' : 'item',
                auth   : authRoles.user,
                'url'  : '/logout',
                'icon' : 'exit_to_app'
            },
            {
                'id'   : 'auth-admin-example',
                'title': 'Admin: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/admin-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-admin-navigation-item',
                'title': 'Nav item only for Admin',
                'type' : 'item',
                'auth' : authRoles.admin,
                'url'  : '/auth/admin-role-example',
                'icon' : 'verified_user'
            },
            {
                'id'   : 'auth-staff-example',
                'title': 'Staff: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/staff-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-staff-navigation-item',
                'title': 'Nav item only for Staff',
                'type' : 'item',
                'auth' : authRoles.staff,
                'url'  : '/auth/staff-role-example',
                'icon' : 'verified_user'
            },
            {
                'id'   : 'auth-guest-example',
                'title': 'Guest: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/guest-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-guest-navigation-item',
                'title': 'Nav item only for Guest',
                'type' : 'item',
                'auth' : authRoles.onlyGuest,
                'url'  : '/auth/guest-role-example',
                'icon' : 'verified_user'
            }
        ]
    }
];

export default navigationConfig;
