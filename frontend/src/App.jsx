import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  withAuth,
  withoutAuth,
} from 'components/hocs/secureWrapper';

import HomePage from 'components/HomePage';
import LoginFormPage from 'components/LoginFormPage';
import SignupFormPage from 'components/SignupFormPage';
import WorkspacesPage from 'components/WorkspacesPage';
import WorkspaceLayout from 'components/WorkspaceLayout';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    Component: withoutAuth(HomePage),
    errorElement: <h2>Error</h2>,
  },
  {
    path: '/signin',
    Component: LoginFormPage,
  },
  {
    path: '/signup',
    Component: withoutAuth(SignupFormPage),
  },
  {
    path: '/workspaces',
    Component: withAuth(WorkspacesPage),
  },
  {
    path: '/workspaces/:workspaceId',
    Component: withAuth(WorkspaceLayout),
    // errorElement: <h2>Error</h2>,
    children: [
      {
        errorElement: <h2>Error</h2>,
        children: [
          {
            index: true,
            element: <h1>Hi from workspace</h1>,
          },
          {
            path: 'new',
            element: <h1>New Workspace</h1>,
          },
          // {
          //   path: 'channels/:channelId',
          //   element: <h1>Hi from channel</h1>,
          // },
          // {
          //   path: 'chats/:chatId',
          //   element: <h1>Hi from chat</h1>,
          // },
          // {
          //   path: '*',
          //   element: <h2>404 Not Found</h2>,
          // },
        ],
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <h2>404 Not Found</h2>,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
