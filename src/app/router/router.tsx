import { ContactsPage, GalleryPage, HomePage } from '@/modules';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/gallery',
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: '/contacts',
        element: <ContactsPage></ContactsPage>,
      },
    ],
  },
]);
export default router;
