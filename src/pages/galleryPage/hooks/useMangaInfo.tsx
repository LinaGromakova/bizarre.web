import { useEffect, useRef, useState } from 'react';
import getMangaList from '../api/getMangaList';
import type { SwiperClass } from 'swiper/react';
import type { MangaInterface } from '@/shared';

export const useMangaInfo = () => {
  const [mangaList, setMangaList] = useState<MangaInterface[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    getMangaList()
      .then((data) => setMangaList(data))
      .catch((error) => console.error('Ошибка:', error));
  }, []);
  const activeManga = mangaList[activeIdx];
  const mangaListLen = mangaList.length;
  return {
    mangaList,
    swiperRef,
    activeIdx,
    setActiveIdx,
    activeManga,
    mangaListLen,
  };
};
