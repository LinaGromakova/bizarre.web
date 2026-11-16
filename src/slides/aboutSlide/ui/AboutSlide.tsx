import { AboutSubtitle } from './AboutSubtitle/AboutSubtitle';
import { AboutTitle } from './AboutTitle/AboutTitle';
import { PortraitWrapper } from './PortraitWrapper/PortraitWrapper';
import { VerticalText } from './VerticalText/VerticalText';

const AboutSlide = () => {
  return (
    <>
      <div className='w-full h-10 absolute top-0 bg-main z-10 max-md:hidden'></div>
      <section className='flex justify-center min-h-[calc(100vh-3rem)] items-stretch md:items-end relative overflow-x-clip'>
        <VerticalText className='rotate-180' />
        <main className='relative w-full md:flex-[40%] md:h-11/12 border-x-2 border-accent/30 text-white flex flex-col justify-evenly py-6 md:py-3 mx-3 max-sm:mx-0.5 max-sm:pt-0 max-sm:pb-3'>
          <header className='px-4 sm:px-6 max-sm:px-2'>
            <AboutTitle />
            <AboutSubtitle />
          </header>
          <div className='relative 3 px-4 sm:px-6'>
            <PortraitWrapper />
          </div>
          <div className='hidden md:block'></div>
        </main>
        <VerticalText />
      </section>
    </>
  );
};

export default AboutSlide;
