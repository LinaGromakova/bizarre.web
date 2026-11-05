import { PlusGradient } from './PlusGradient/PlusGradient';
import { EvolutionSlider } from './Slider/Slider';

const EvolutionSlide = () => {
  return (
    <section className='text-white flex flex-col justify-between items-center w-full min-h-screen'>
      <PlusGradient />
      <h1 className='text-7xl text-center text-accent relative z-10 mt-12'>
        Эволюция стиля
      </h1>
      <EvolutionSlider />
    </section>
  );
};

export default EvolutionSlide;
