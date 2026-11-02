import ArakiPhoto from './assets/ArakiPhoto.jpg';

export const PortraitWrapper = () => {
  return (
    <img
      alt='Hirohiko Araki'
      src={ArakiPhoto}
      className='w-full object-contain max-w-9/12 mx-auto'
    />
  );
};
