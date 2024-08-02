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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Guidelines /> },
      {
        path: 'logo',
        element: <Logo />,
      },
      {
        path: 'colors',
        element: <Colors />,
      },
      {
        path: 'typography',
        element: <Typography />,
      },
      {
        path: 'applications',
        element: <Applications />,
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
