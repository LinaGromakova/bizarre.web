import { DiamondGradient } from '@/shared';
import { CollageWrapper } from './CollageWrapper/CollageWrapper';
import { JojoSubtitle } from './JojoSubtitle/JojoSubtitle';
import { JojoTitle } from './JojoTitle/JojoTitle';

const JojoSlide = () => {
  return (
    <section
      className='relative flex flex-col-reverse lg:flex-row text-white w-full min-h-screen 
    items-center justify-evenly px-4 2xs:px-6 sm:px-10 overflow-x-clip flex-1/2 '
    >
      <DiamondGradient
        className='fixed inset-0 pointer-events-none'
        opacity='0.07'
        color='violet'
        size={55}
      />
      <div className='w-full lg:w-1/2 flex justify-center z-10 '>
        <CollageWrapper />
      </div>
      <main className='w-full lg:w-1/2 flex flex-col items-center z-10 '>
        <JojoTitle />
        <JojoSubtitle />
      </main>
    </section>
  );
};

export default JojoSlide;
