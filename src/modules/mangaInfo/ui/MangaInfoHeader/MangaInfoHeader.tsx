export const MangaInfoHeader = ({
  activeIdx,
  mangaListLen,
  releaseYear,
}: {
  activeIdx: number;
  mangaListLen: number;
  releaseYear: number;
}) => {
  return (
    <header className='flex items-center gap-1.5 sm:gap-3 px-3.5 py-1 text-accent font-black text-xs tracking-[0.2em] uppercase -skew-x-12 shadow-[0_0_18px_rgba(212,175,55,0.4)] w-fit'>
      <span className='skew-x-12'>
        {String(activeIdx + 1).padStart(2, '0')} /
        {String(mangaListLen).padStart(2, '0')}
      </span>

      {releaseYear && (
        <span className='skew-x-12 opacity-80'>• {releaseYear}</span>
      )}
      <span className='text-purple-200/50 sm:text-[10px] text-[8px]'>
        Данные:{' '}
        <a
          href='https://shikimori.io/api/doc'
          className='hover:text-purple-200 transition-colors'
          target='_blank'
        >
          Shikimori API
        </a>
      </span>
    </header>
  );
};
