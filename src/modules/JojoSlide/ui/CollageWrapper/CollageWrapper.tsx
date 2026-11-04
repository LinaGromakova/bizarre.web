import CollageImg from './assets/collage.jfif';
import JojoImg from './assets/Jojo.png';
export const CollageWrapper = () => {
  return (
    <div className='flex-1/2 h-[450px] relative'>
      <img
        src={CollageImg}
        alt='Jojo collage'
        className=' w-10/12 mx-auto  object-cover'
      />
      <img
        src={JojoImg}
        alt='Jotaro Kujo'
        className='absolute w-[45%] h-auto -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-100'
      />
    </div>
  );
};
