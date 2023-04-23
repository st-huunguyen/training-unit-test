import React from 'react';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const Users = React.lazy(() => import('./Users'));
const UserDetail = React.lazy(() => import('./UserInfo'));
const UserList = React.lazy(() => import('./UserList'));

const userRoutes: PageRoute[] = [
  {
    path: '/',
    element: Users,
    children: [
      {
        path: 'users',
        element: UserList,
      },
      {
        path: 'users/:id',
        element: UserDetail,
      },
    ],
  },
];

export default userRoutes;
