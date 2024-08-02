import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Guidelines from './routes/Guidelines.tsx';
import Logo from './routes/Logo.tsx';
import Typography from './routes/Typography.tsx';
import Colors from './routes/Colors.tsx';
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
        path: 'typography',
        element: <Typography />,
      },
      {
        path: 'colors',
        element: <Colors />,
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
