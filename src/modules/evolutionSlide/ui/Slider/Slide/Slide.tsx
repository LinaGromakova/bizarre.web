import { SlideTitle } from './SlideContent/SlideTitle';
import { SlideImg } from './SlideContent/SlideImg';
import { SlideSubtitle } from './SlideContent/SlideSubtitle';

interface SlideProps {
  dataSlide: {
    title: string;
    subtitle: string;
    image: string;
  };
}
export const Slide = ({ dataSlide }: SlideProps) => {
  return (
    <>
      <SlideImg image={dataSlide.image} />
      <div className='border-l border-r border-white px-8 md:px-16 w-full flex flex-col items-center justify-center text-center bg-main'>
        <SlideTitle title={dataSlide.title} />
        <SlideSubtitle subtitle={dataSlide.subtitle} />
      </div>
    </>
  );
};
