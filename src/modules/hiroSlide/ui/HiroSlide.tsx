import { HiroTitle } from './HiroTitle/HiroTitle';
import { PortraitWrapper } from './PortraitWrapper/PortraitWrapper';
import { HiroGradientBackground } from './HiroGradientBackground/HiroGradientBackground';
import { StarList } from './StarList/StarList';
import { ArrowList } from './ArrowList/ArrowList';
import { BorderList } from './BorderList/BorderList';

const HiroSlide = () => {
  return (
    <section className='relative z-10 border-2 border-accent w-full h-full flex flex-col justify-center items-center my-4'>
      <BorderList />
      <HiroGradientBackground />
      <HiroTitle />
      <StarList />
      <PortraitWrapper />
      <ArrowList />
    </section>
  );
};
export default HiroSlide;
