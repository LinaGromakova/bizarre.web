import { HiroTitle } from './HiroTitle/HiroTitle';
import { PortraitWrapper } from './PortraitWrapper/PortraitWrapper';
import { StarList } from './StarList/StarList';
import { ArrowList } from './ArrowList/ArrowList';
import { BorderList } from './BorderList/BorderList';
import { DiamondGradient } from '@/shared';

const HiroSlide = () => {
  return (
    <section className='absolute inset-x-0 mx-auto top-6 sm:top-10 z-10 w-[94%] sm:w-[97%] h-[calc(100%-2.5rem)] sm:h-[93%] flex flex-col justify-end md:justify-center items-center max-lg:overflow-hidden'>
      <BorderList />
      <DiamondGradient
        className='absolute'
        color='#fff'
        opacity='0.04'
        size={45}
      />
      <HiroTitle />
      <StarList />
      <PortraitWrapper />
      <ArrowList />
    </section>
  );
};

export default HiroSlide;
