export const SlideImg = ({ image }: { image: string }) => {
  return (
    <img
      src={image}
      alt='image slide'
      className='min-w-full h-[63%] object-cover object-bottom'
    />
  );
};
