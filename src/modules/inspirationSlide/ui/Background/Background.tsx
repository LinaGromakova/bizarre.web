import { StarIcon } from "@/shared";

export const Background = () => {
  return (
    <>
      <div className='fixed inset-0 z-0 h-full w-full opacity-15 bg-[repeating-linear-gradient(-45deg,#141414_0px,#141414_5px,transparent_5px,transparent_8px),repeating-linear-gradient(45deg,#141414_0px,#141414_5px,transparent_5px,transparent_8px),linear-gradient(#d4af37,#d4af37)]'></div>
      <div className='fixed w-full inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.6)_100%)]'></div>
      <div className='absolute -left-20 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute -right-20 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute left-[5%] top-1/2 opacity-6 pointer-events-none z-0 rotate-12'>
        <StarIcon className='w-64 h-64 text-light' />
      </div>
      <div className='absolute right-[3%] bottom-1/2 opacity-5 pointer-events-none z-0 -rotate-12'>
        <StarIcon className='w-80 h-80 text-light' />
      </div>
    </>
  );
};
