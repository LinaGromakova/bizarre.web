export const AboutParagraph = () => {
  return (
    <div className='relative ml-6 -mt-5 max-w-md'>
      <div className='absolute inset-0 border-4 border-[#005EA5] translate-x-2 translate-y-2 pointer-events-none' />
      <div className='flex text-base leading-relaxed font-medium bg-[#12131a] p-6 border-4 border-[#141414] shadow-[8px_8px_0px_#ffffff] relative pl-8 before:content-[""] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-[#D50668] z-10'>
        <p className='text-white/90'>
          Японский мангака, создавший культовую вселенную JoJo’s Bizarre
          Adventure. Его визуальный язык ломает стандарты: анатомические позы,
          кричащие неоновые палитры и безумный символизм вдохновляют мировые
          модные дома, включая Gucci и Лувр
        </p>
      </div>
    </div>
  );
};
