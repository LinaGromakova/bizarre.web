import type { MangaInterface } from '../../types/mangaInterface';

export const MangaItem = ({ manga }: { manga: MangaInterface }) => {
  return (
    <div>
      <img
        className='h-120'
        src={manga.coverImage}
        alt=''
      />
      {manga.title}
    </div>
  );
};
