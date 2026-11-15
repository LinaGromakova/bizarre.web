export const GenresInfo = ({ genres }: { genres: string[] }) => {
  return (
    <>
      {genres.length > 0 && (
        <div className='flex flex-wrap justify-center lg:justify-start sm:gap-2 gap-1'>
          {genres.map((genre: string) => (
            <span
              key={genre}
              className='sm:px-3 px-1 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-950/40 border border-purple-500/40 -skew-x-12 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
            >
              <span className='inline-block skew-x-12'>{genre}</span>
            </span>
          ))}
        </div>
      )}
    </>
  );
};
