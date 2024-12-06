import { createBrowserRouter } from 'react-router';
import MainLayout from '../mainLayout/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import AllVisa from '../pages/AllVisa';
import Home from '../pages/Home';
import AddVisa from '../pages/AddVisa';
import MyAddedVisa from '../pages/MyAddedVisa';
import MyApplications from '../pages/MyApplications';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/all-visa', element: <AllVisa /> },
      { path: '/add-visa', element: <AddVisa /> },
      { path: '/my-added-visa', element: <MyAddedVisa /> },
      { path: '/my-visa-applications', element: <MyApplications /> },
    ],
  },
]);

export default Router;
