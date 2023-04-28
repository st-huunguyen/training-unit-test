import React from 'react';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const Users = React.lazy(() => import('./Users'));
const UserDetail = React.lazy(() => import('./UserDetail'));
const UserList = React.lazy(() => import('./UserList'));

const userRoutes: PageRoute[] = [
  {
    path: 'users',
    element: Users,
    children: [
      {
        path: '',
        element: UserList
      },
      {
        path: ':id',
        element: UserDetail
      }
    ]
  }
];

export default userRoutes;
