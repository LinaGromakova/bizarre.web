import { DiamondGradient } from '@/shared';
import { EffectsLayout } from './EffectsLayout/EffectsLayout';
import { useMangaInfo } from '../hooks/useMangaInfo';
import { GalleryLoading } from './GalleryLoading/GalleryLoading';
import MangaCards from '@/modules/mangaCards';
import MangaInfo from '@/modules/mangaInfo';

const GalleryPage = () => {
  const {
    mangaList,
    setActiveIdx,
    swiperRef,
    mangaListLen,
    activeManga,
    activeIdx,
  } = useMangaInfo();

  return (
    <section className='relative min-h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden flex items-center justify-center bg-black text-white px-4 sm:px-6 py-12 lg:py-8 select-none'>
      <div className='absolute inset-0 bg-radial from-transparent via-purple-950/25 to-black pointer-events-none' />
      <DiamondGradient
        className='absolute inset-0 pointer-events-none'
        size={50}
        color='#fff'
        opacity='0.04'
      />
      <EffectsLayout />
      {mangaList.length === 0 ? (
        <GalleryLoading />
      ) : (
        <div className='relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-20'>
          <MangaCards
            mangaList={mangaList}
            swiperRef={swiperRef}
            setActiveIdx={setActiveIdx}
          />
          <MangaInfo
            activeManga={activeManga}
            activeIdx={activeIdx}
            mangaListLen={mangaListLen}
            ref={swiperRef}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
