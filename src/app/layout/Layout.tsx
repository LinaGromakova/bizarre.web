import { Navigation } from '@/modules';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
