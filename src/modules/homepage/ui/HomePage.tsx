import { useRef } from 'react';
import { Outlet } from 'react-router';
import { SlidesList } from './SlidesList/SlidesList';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className='relative h-[500svh] w-full bg-main'
    >
      <Outlet />
      <div className='sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center px-10 pb-5 pt-10'>
        <SlidesList containerRef={containerRef} />
      </div>
    </div>
  );
};

export default HomePage;
