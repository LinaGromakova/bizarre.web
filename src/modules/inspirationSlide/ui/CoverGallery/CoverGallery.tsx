import Image1 from './assets/Kristen McMenamy by Richard Avedon - Versace F_W 1995.jfif';
import Image2 from './assets/Shopify_V48_1_c323ae23-73da-4c30-b7ca-3e60dfcea728.webp';
import Image3 from './assets/Без названия (26).jfif';
export const CoverGallery = () => {
  return (
    <div className='w-1/2 h-auto flex -mt-15 mb-10'>
      <img
        src={Image1}
        alt=''
        className='w-1/3 -rotate-6'
      />
      <img
        src={Image2}
        alt=''
        className='w-1/3 z-10 relative rotate-8'
      />
      <img
        src={Image3}
        alt=''
        className='w-1/3 z-20 -rotate-4'
      />
    </div>
  );
};
