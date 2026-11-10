import { motion } from 'framer-motion';

export const AboutSubtitle = () => {
  return (
    <motion.p
      className='text-left  xl:text-xl sm:text-justify text-sm sm:text-base leading-relaxed text-white/90'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
        },
      }}
    >
      Является мангакой и автором Невероятных приключений ДжоДжо. Он дебютировал
      под псевдонимом Тошиюки Араки (荒木 利之 Araki Toshiyuki) в 1980 с
      ван-шотом «Poker Under Arms», и начал свою полноценную карьеру с коротких
      серий «Cool Shock B.T.», «Baoh: The Visitor» и «Gorgeous Irene». Его
      работа над «Невероятными приключениями ДжоДжо» переросла в культовую серию
      и продолжает выходить более 30 лет, насчитывая уже 131 том (на сентябрь
      2021) и тираж более 100 миллионов экземпляров (июль 2019).
    </motion.p>
  );
};
