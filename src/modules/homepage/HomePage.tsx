import { Outlet } from 'react-router';

const HomePage = () => {
  return (
    <div>
      <Outlet></Outlet>
      HomePage
    </div>
  );
};

export default HomePage;
