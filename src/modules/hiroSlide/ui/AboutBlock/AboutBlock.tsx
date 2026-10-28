import { AboutParagraph } from './AboutParagraph';
import { AboutTitle } from './AboutTitle';
import { BlockProfessional } from './BlockProfessional';

const AboutBlock = () => {
  return (
    <div className='flex-1/2 flex z-10'>
      <div className='relative z-10 flex-1/2 h-full flex flex-col justify-center pl-24 pr-12'>
        <div className='relative -rotate-6 -top-20'>
          <AboutTitle title='HIROHIKO ARAKI' />
          <BlockProfessional />
        </div>
        <AboutParagraph />
      </div>
    </div>
  );
};
export default AboutBlock;
