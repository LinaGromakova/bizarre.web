import { AboutSubtitle } from './AboutSubtitle/AboutSubtitle';
import { AboutTitle } from './AboutTitle/AboutTitle';
import { PortraitWrapper } from './PortraitWrapper/PortraitWrapper';
import { VerticalText } from './VerticalText/VerticalText';

const AboutSlide = () => {
  return (
    <section className='flex justify-center h-full items-end relative overflow-hidden'>
      <VerticalText className='rotate-180' />
      <main className='relative w-1/2 h-11/12 border-l-2 border-r-2 border-accent/30 text-white flex flex-col justify-between flex-[50%] '>
        <header className='px-10'>
          <AboutTitle />
          <AboutSubtitle />
        </header>
        <div className='relative py-5 my-4'>
          <PortraitWrapper></PortraitWrapper>
        </div>
      </main>
      <VerticalText />
    </section>
  );
};
export default AboutSlide;
