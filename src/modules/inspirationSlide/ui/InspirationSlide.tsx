import { CoverGallery } from './CoverGallery/CoverGallery';
import { Background } from './Background/Background';
import { InspirationTitle } from './InspirationTitle/InspirationTitle';
import { InspirationSubtitle } from './InspirationSubtitle/InspirationSubtitle';
import { VerticalText } from './VerticalText/VerticalText';

const InspirationSlide = () => {
  return (
    <section className='relative flex flex-col items-center justify-center w-full min-h-screen py-20 select-none '>
      <Background />
      <VerticalText
        className='text-white/20 rotate-180'
        position='left'
        content='Dior &nbsp; ★ &nbsp; Vogue &nbsp; ★ Versace &nbsp;'
      />
      <VerticalText
        className='text-accent/30'
        position='right'
        content="JoJo's Bizarre Adventure &nbsp; ★ &nbsp; High Fashion"
      />
      <InspirationTitle />
      <CoverGallery />
      <InspirationSubtitle />
    </section>
  );
};

export default InspirationSlide;
