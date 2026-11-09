import { EvolutionTitle } from './EvolutionTitle/EvolutionTitle';
import { PlusGradient } from './PlusGradient/PlusGradient';
import { EvolutionSlider } from './Slider/Slider';

const EvolutionSlide = () => {
  return (
    <section className='relative text-white flex flex-col justify-center items-center w-full min-h-screen max-sm:pt-2 sm:pt-12 overflow-x-clip '>
      <PlusGradient />
      <EvolutionTitle />
      <EvolutionSlider />
    </section>
  );
};

export default EvolutionSlide;
