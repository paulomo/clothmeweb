import React from 'react';
import { authRoles } from "app/auth";


export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    // auth: authRoles.user,
    routes  : [
        {
            path     : '/pages/profile',
            component: React.lazy(() => import('./Profile'))
        }
    ]
};
