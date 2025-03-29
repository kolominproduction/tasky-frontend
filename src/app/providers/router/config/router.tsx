import { createBrowserRouter } from 'react-router';

import { MainPage } from '@/pages/landing/MainPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { Dashboard } from '@/pages/app/Dashboard';
import { ROUTES } from '@/shared/config/router/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.landing.path,
    Component: MainPage,
  },
  {
    path: ROUTES.auth.path,
    children: [{ path: ROUTES.auth.signin.route, Component: LoginPage }],
  },
  {
    path: ROUTES.app.path,
    children: [{ index: true, Component: Dashboard }],
  },
]);
