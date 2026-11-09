import { CoverGallery } from './CoverGallery/CoverGallery';
import { Background } from './Background/Background';
import { InspirationTitle } from './InspirationTitle/InspirationTitle';
import { InspirationSubtitle } from './InspirationSubtitle/InspirationSubtitle';
import { VerticalText } from './VerticalText/VerticalText';

const InspirationSlide = () => {
  return (
    <section className='relative px-4 sm:px-10 lg:px-20 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-0 w-full min-h-dvh pt-14 pb-8 md:py-16 select-none overflow-x-clip'>
      <Background />
      <VerticalText
        className='text-white/20 rotate-180'
        position='left'
        content={
          'Dior\u00A0\u00A0★\u00A0\u00A0Vogue\u00A0\u00A0★\u00A0\u00A0Versace'
        }
      />
      <VerticalText
        className='text-accent/30'
        position='right'
        content={
          "JoJo's Bizarre Adventure\u00A0\u00A0★\u00A0\u00A0High Fashion"
        }
      />
      <InspirationTitle />
      <CoverGallery />
      <InspirationSubtitle />
    </section>
  );
};

export default InspirationSlide;
