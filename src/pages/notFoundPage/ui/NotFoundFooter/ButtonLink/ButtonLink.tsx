import { Link } from 'react-router';

export const ButtonLink = () => {
  return (
    <div
      className='mt-9'
      title='На главную'
      aria-label='Вернуться на главную страницу'
    >
      <Link
        to='/'
        className='group relative inline-flex items-center cursor-pointer'
      >
        <div className='w-0 h-0 border-y-20 border-y-transparent border-r-24 border-r-accent group-hover:border-r-purple-500 transition-colors duration-300' />
        <div className='relative bg-accent group-hover:bg-purple-600 text-black group-hover:text-white font-cinzel font-black text-xs sm:text-sm tracking-[0.2em] uppercase px-6 sm:px-8 py-2.5 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]'>
          На главную
        </div>
        <div className='w-2.5 h-10 bg-accent/80 group-hover:bg-purple-500/80 ml-1 -skew-x-12 transition-colors duration-300' />
        <div className='w-1.5 h-10 bg-accent/45 group-hover:bg-purple-500/45 ml-1 -skew-x-12 transition-colors duration-300' />
      </Link>
    </div>
  );
};
