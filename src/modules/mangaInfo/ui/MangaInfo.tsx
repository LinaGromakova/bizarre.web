import { motion } from 'framer-motion';
import { GalleryBtnController } from './GalleryBtnControllers/GalleryBtnControllers';
import { MangaTitle } from './MangaTitle/MangaTitle';
import { GenresInfo } from './GenresInfo/GenresInfo';
import { MangaDescription } from './MangaDescription/MangaDescription';
import { MangaInfoHeader } from './MangaInfoHeader/MangaInfoHeader';
import type { MangaInterface } from '@/shared';
import type { SwiperClass } from 'swiper/react';

interface MangaInfoProps {
  activeManga: MangaInterface;
  activeIdx: number;
  mangaListLen: number;
  ref: React.RefObject<SwiperClass | null>;
}

const MangaInfo = ({
  activeManga,
  activeIdx,
  mangaListLen,
  ref,
}: MangaInfoProps) => {
  return (
    <div className='flex-1 max-w-xl w-full h-auto lg:h-122.5 text-center lg:text-left flex flex-col justify-between gap-6'>
      {activeManga && (
        <motion.div
          key={activeManga.mangaId}
          initial={{ opacity: 0, x: 30, skewX: -4 }}
          animate={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className='flex-1 min-h-0 flex flex-col gap-3 sm:gap-4'
        >
          <MangaInfoHeader
            releaseYear={activeManga.releaseYear}
            activeIdx={activeIdx}
            mangaListLen={mangaListLen}
          />
          <MangaTitle title={activeManga.title} />
          <GenresInfo genres={activeManga.genres} />
          <div className='max-h-40 lg:max-h-none lg:flex-1 lg:min-h-0 overflow-y-auto custom-scrollbar'>
            <MangaDescription description={activeManga.description} />
          </div>
        </motion.div>
      )}
      <div className='shrink-0'>
        <GalleryBtnController
          activeIdx={activeIdx}
          ref={ref}
          mangaListLen={mangaListLen}
        />
      </div>
    </div>
  );
};
export default MangaInfo;
