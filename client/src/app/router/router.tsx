import { createBrowserRouter } from 'react-router-dom';
// import { SignInPage, SignUpPage } from '@/pages';
import { ROUTES } from './routes';
import Layout from './Layout/Layout';
import { SignInPage, SignUpPage } from '../../pages';
import { ThemePage } from '@/pages/ThemePage';
// import { ProtectedRoute } from '@/shared/ui/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.SIGNIN,
        element: <SignInPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: ROUTES.THEME,
        element: <ThemePage/>
      }
    ],
  },
]);
