import { Outlet } from 'react-router';
import HiroSlide from '../hiroSlide/ui';

const HomePage = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#0c0d14] flex items-center text-white select-none'>
      <Outlet />
      <HiroSlide></HiroSlide>
    </div>
  );
};

export default HomePage;
