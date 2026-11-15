export const MangaDescription = ({ description }: { description: string }) => {
  return (
    <div className='flex-1 min-h-0 md:h-40 bg-linear-to-r from-purple-950/70 via-black/65 scroll-small to-transparent backdrop-blur-sm md:p-4 p-2 overflow-y-auto'>
      <p className='text-sm sm:text-base text-white/90 leading-relaxed '>
        {description || 'Описание отсутствует'}
      </p>
    </div>
  );
};
