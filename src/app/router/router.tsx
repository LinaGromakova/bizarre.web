import { ContactsPage, GalleryPage, HomePage, NotFoundPage } from '@/modules';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
export default router;
