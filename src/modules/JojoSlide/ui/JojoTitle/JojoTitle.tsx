export const JojoTitle = () => {
  return (
    <div className='flex flex-col items-center justify-center w-fit mx-auto italic'>
      <h1 className='flex -rotate-6 items-center font-black tracking-tight relative z-10 bg-linear-to-b from-white  to-light bg-clip-text text-transparent font-cinzel'>
        {[..."JOJO'S"].map((char, index) => {
          const yOffsets = [
            'translate-y-6 text-9xl',
            'translate-y-10 text-8xl',
            'translate-y-5 text-8xl',
            'translate-y-7 text-8xl',
            'translate-y-2 text-7xl',
            'translate-y-7 text-7xl',
          ];
          return (
            <span
              key={index}
              className={`inline-block ${yOffsets[index] || ''}`}
            >
              {char}
            </span>
          );
        })}
      </h1>
      <div className='text-3xl -mt-10 self-end uppercase drop-shadow-violet'>
        <p className='text-right font-bold'>Bizarre</p>
        <p className='-mt-3 font-bold'>Adventure</p>
      </div>
    </div>
  );
};
