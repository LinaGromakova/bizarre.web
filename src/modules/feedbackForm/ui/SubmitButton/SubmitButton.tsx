import { motion } from 'framer-motion';

export const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='flex sm:justify-end justify-center pt-2'
    >
      <button
        type='submit'
        className='cursor-pointer bg-accent text-main font-cinzel font-semibold text-sm
            tracking-[0.25em] uppercase px-10 py-4 transition-colors active:scale-95 hover:bg-transparent hover:text-accent border border-accent sm:h-15 h-12 w-67'
      >
        {isLoading ? (
          <span>
            Отправка<span className='animate-pulse inline-block'>...</span>
          </span>
        ) : (
          'Оформить заказ'
        )}
      </button>
    </motion.div>
  );
};
