import { useEffect, useState } from 'react';
import getMangaList from '../api/getMangaList';
import { MangaItem } from './MangaItem/MangaItem';
import type { MangaInterface } from '../types/mangaInterface';

const MangaList = () => {
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    getMangaList()
      .then((data) => {
        setMangaList(data);
      })
      .catch((error) => console.error('Ошибка:', error));
  }, []);
  return (
    <main className='flex flex-wrap gap-4 justify-center items-center'>
      {mangaList.map((manga: MangaInterface) => (
        <MangaItem
          manga={manga}
          key={manga.mangaId}
        ></MangaItem>
      ))}
    </main>
  );
};
export default MangaList;
