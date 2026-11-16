import { useHandleMouseMove } from '../hooks/useHandleMouseMove';
import { BackgroundLayout } from './BackgroundLayout/BackgroundLayout';
import { NotFoundFooter } from './NotFoundFooter/NotFoundFooter';
import { NotFoundHeader } from './NotFoundHeader/NotFoundHeader';

const NotFoundPage = () => {
  const { handleMouseMove, bgY, bgX, standX, standY } = useHandleMouseMove();

  return (
    <main
      onMouseMove={handleMouseMove}
      className='relative w-full min-h-screen overflow-hidden bg-black flex justify-center items-center flex-col px-4 pt-20 pb-10 select-none'
    >
      <BackgroundLayout
        bgY={bgY}
        bgX={bgX}
      />
      <div className='relative z-10 w-full max-w-4xl px-6 py-12 sm:py-16 flex flex-col items-center text-center '>
        <NotFoundHeader
          standX={standX}
          standY={standY}
        />
        <NotFoundFooter />
      </div>
    </main>
  );
};

export default NotFoundPage;
