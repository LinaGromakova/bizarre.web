import PortraitImage from './assets/HirohikoSelfportrait.png';

export const PortraitWrapper = () => {
  return (
    <div className='relative -bottom-2.5 z-20 transition-transform duration-300 hover:scale-102'>
      <img
        src={PortraitImage}
        alt='Hirohiko Araki self-portrait'
        className='w-147.5 h-auto drop-shadow-[-20px_10px_30px_rgba(0,0,0,0.8)] relative z-10'
      />
    </div>
  );
};
