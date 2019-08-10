import React from 'react';

export const ResetPasswordConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/reset-password',
            component: React.lazy(() => import('./ResetPassword'))
        }
    ]
};
