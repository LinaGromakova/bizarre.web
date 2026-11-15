export const MangaTitle = ({ title }: { title: string }) => {
  const isLong = title.length > 32;
  return (
    <h2
      className={`font-black uppercase tracking-tight leading-widest ${
        isLong ? 'text-xl 2xs:text-4xl' : 'text-3xl sm:text-5xl'
      }`}
    >
      {title}
    </h2>
  );
};
