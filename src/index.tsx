import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './app/providers/router';

const root = document.getElementById('root');

createRoot(root as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>,
);
