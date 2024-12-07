import { createBrowserRouter } from 'react-router';
import MainLayout from '../mainLayout/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import AllVisa from '../pages/AllVisa';
import Home from '../pages/Home';
import AddVisa from '../pages/AddVisa';
import MyAddedVisa from '../pages/MyAddedVisa';
import MyApplications from '../pages/MyApplications';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoutes from '../private/PrivateRoutes';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/all-visa', element: <AllVisa /> },
      {
        path: '/add-visa',
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: '/my-added-visa',
        element: (
          <PrivateRoutes>
            <MyAddedVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: '/my-visa-applications',
        element: (
          <PrivateRoutes>
            <MyApplications />
          </PrivateRoutes>
        ),
      },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default Router;
