import { Outlet } from 'react-router';
import HiroSlide from '../hiroSlide/ui';

const HomePage = () => {
  return (
    <div className='relative h-dvh w-full flex flex-col justify-center overflow-hidden bg-main px-10 pb-5 pt-10'>
      <Outlet />
      <HiroSlide></HiroSlide>
    </div>
  );
};

export default HomePage;
