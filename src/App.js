import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import HomeRoute from './routes/HomeRoute';
import NotFoundRoute from './routes/NotFoundRoute';
import RepositoriesSearchRoute from './routes/RepositoriesSearchRoute';
import EditorRoute from './routes/EditorRoute';
import SignUpRoute from './routes/SignUpRoute';
import SignInRoute from './routes/SignInRoute';
import SignOutRoute from './routes/SignOutRoute';
import TestRoute from './routes/TestRoute';
import { useState } from 'react';
import FormR from './TestRevision/FormR';
import List from './TestRevision/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      {
        path: 'test',
        element: <TestRoute />,
      },
      {
        path: 'signout',
        element: <SignOutRoute />,
      },
      {
        path: 'signup',
        element: <SignUpRoute />,
      },
      {
        path: 'signin',
        element: <SignInRoute />,
      },
      {
        path: '',
        element: <HomeRoute />,
      },
      {
        path: 'repositories/:owner/:repoName/*',
        element: <EditorRoute />,
      },
      {
        path: 'repositories',
        element: <RepositoriesSearchRoute />,
      },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
]);

const [users, setUsers] = useState([]);

function onSubmit(user) {
  setUsers([...users, user]);
}

const list = [
  {
    id: 1,
    name: 'kvn',
    age: 23,
  },
  {
    id: 2,
    name: 'daniel',
    age: 55,
  },
  {
    id: 3,
    name: 'viji',
    age: 47,
  },
];

function App() {
  // return <RouterProvider router={router} />;
  return (
    <div>
      <FormR onSubmit={onSubmit} />
      <List users={list} />
    </div>
  );
}

export default App;
