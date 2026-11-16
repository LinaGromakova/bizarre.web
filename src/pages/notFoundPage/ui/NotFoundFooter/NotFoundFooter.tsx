import { ButtonLink } from "./ButtonLink/ButtonLink";

export const NotFoundFooter = () => {
  return (
    <>
      <div className='relative w-56 sm:w-80 flex items-center justify-center my-5'>
        <div className='w-full h-px bg-linear-to-r from-transparent via-accent/60 to-transparent' />
        <div className='absolute w-2.5 h-2.5 bg-accent rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.8)]' />
      </div>

      <div className='space-y-2 max-w-md text-center'>
        <p className='text-xl sm:text-2xl font-cinzel font-bold tracking-[0.2em] text-accent uppercase'>
          «Yare Yare Daze...»
        </p>
        <p className='text-xs sm:text-sm text-purple-200/75 tracking-widest uppercase leading-relaxed'>
          Страница не найдена
        </p>
      </div>
      <ButtonLink />
    </>
  );
};
