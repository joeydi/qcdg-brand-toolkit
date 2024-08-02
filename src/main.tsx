import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Guidelines from './routes/Guidelines.tsx';
import Logo from './routes/Logo.tsx';
import Colors from './routes/Colors.tsx';
import Typography from './routes/Typography.tsx';
import Applications from './routes/Applications.tsx';
import { Global } from '@emotion/react';
import { globalStyles } from './styles.tsx';
import AnimatedLayout from './components/AnimatedRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <AnimatedLayout>
            <Guidelines />
          </AnimatedLayout>
        ),
      },
      {
        path: 'logo',
        element: (
          <AnimatedLayout>
            <Logo />
          </AnimatedLayout>
        ),
      },
      {
        path: 'colors',
        element: (
          <AnimatedLayout>
            <Colors />
          </AnimatedLayout>
        ),
      },
      {
        path: 'typography',
        element: (
          <AnimatedLayout>
            <Typography />
          </AnimatedLayout>
        ),
      },
      {
        path: 'applications',
        element: (
          <AnimatedLayout>
            <Applications />
          </AnimatedLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
