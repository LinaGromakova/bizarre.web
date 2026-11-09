import { motion } from 'framer-motion';
const TITLES = ['Вдохновение', 'высокой', 'модой'];
export const InspirationTitle = () => {
  return (
    <h1 className='relative text-2xl 2xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6x z-10 text-white tracking-wide uppercase self-start mt-4 md:mt-8 leading-tight'>
      {TITLES.map((title, idx) => (
        <motion.span
          key={idx}
          className='first-letter:text-accent block'
          variants={{
            inactive: { opacity: 0, y: 60, scale: 0.95 },
            active: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 + idx / 10,
              },
            },
          }}
        >
          {title}
        </motion.span>
      ))}
    </h1>
  );
};
