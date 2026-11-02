import PortraitImage from './assets/Hirohiko.png';

export const PortraitWrapper = () => {
  return (
    <div className='relative flex justify-center w-167.5 bottom-0'>
      <div className='absolute w-[115%] aspect-square bg-[#141414] rotate-45 bottom-0 drop-shadow-[-20px_10px_10px_rgba(0,0,0,0.4)]'></div>

      <img
        src={PortraitImage}
        alt='Hirohiko Araki self-portrait'
        className='relative w-152 h-auto drop-shadow-[-20px_10px_30px_rgba(0,0,0,0.4)]'
      />
    </div>
  );
};
