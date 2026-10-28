export const AboutTitle = ({ title }: { title: string }) => {
  return (
    <h1 className='text-7xl font-black tracking-tighter drop-shadow-[6px_6px_0px_#12131a][text-shadow:2px_2px_0_#12131a,-2px_-2px_0_#12131a,2px_-2px_0_#12131a,-2px_2px_0_#12131a] font-rocknroll text-white'>
      {title}
    </h1>
  );
};
