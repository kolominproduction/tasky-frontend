export const ROUTES = {
  landing: {
    path: '/',
  },
  auth: {
    path: '/auth',
    signin: {
      route: 'signin',
      path: '/auth/signin',
    },
    signup: {
      route: 'signup',
      path: '/auth/signup',
    },
  },
  app: {
    path: '/app',
    dashboard: {
      route: 'dashboard',
      path: '/app/dashboard',
    },
  },
};
