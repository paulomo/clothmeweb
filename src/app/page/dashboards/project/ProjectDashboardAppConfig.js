import React from 'react';
import { authRoles } from "app/auth";


export const ProjectDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    // auth: authRoles.user,
    routes  : [
        {
            path     : '/apps/dashboards/project',
            component: React.lazy(() => import('./ProjectDashboardApp'))
        }
    ]
};
