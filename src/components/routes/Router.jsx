import { createBrowserRouter } from 'react-router';
import MainLayout from '../mainLayout/MainLayout';
import ErrorPage from '../pages/ErrorPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <h1>Home</h1> },
      { path: '/all-visa', element: <h1>all visa</h1> },
      { path: '/add-visa', element: <h1>add visa</h1> },
      { path: '/my-added-visa', element: <h1>My added visa</h1> },
      { path: '/my-visa-applications', element: <h1>my visa applications</h1> },
    ],
  },
]);

export default Router;
