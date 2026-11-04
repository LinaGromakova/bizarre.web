import { DiamondGradient } from '@/shared';
import { CollageWrapper } from './CollageWrapper/CollageWrapper';
import { JojoSubtitle } from './JojoSubtitle/JojoSubtitle';
import { JojoTitle } from './JojoTitle/JojoTitle';

const JojoSlide = () => {
  return (
    <section className='flex text-white w-full items-center justify-between'>
      <CollageWrapper />
      <DiamondGradient
        className='fixed inset-0'
        opacity='7'
        color='violet'
        size={55}
      />
      <main className='flex-1/2'>
        <JojoTitle />
        <JojoSubtitle />
      </main>
    </section>
  );
};
export default JojoSlide;
