import clsx from 'clsx';
import type { FormFieldInterface } from '../../types/interfaceFormField';
import { motion } from 'framer-motion';

export const FormField = ({
  field,
  errors,
  idx,
}: {
  field: FormFieldInterface;
  errors: Record<string, string>;
  idx: number;
}) => {
  const Tag = field.component;
  const isTextarea = field.component === 'textarea';
  return (
    <motion.label
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: idx / 10 + 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      key={field.name}
      className={clsx('flex flex-col gap-2', isTextarea && 'col-span-full')}
    >
      <span className='font-cinzel text-xs tracking-[0.25em] text-accent/80 uppercase'>
        {field.label}
      </span>
      <Tag
        type={field.component === 'input' ? field.type : undefined}
        name={field.name}
        rows={isTextarea ? 1 : undefined}
        className={clsx(
          'bg-transparent border-b px-2.5 text-white outline-none transition-colors',
          isTextarea && 'resize-none h-15',
          errors[field.name]
            ? 'border-coral focus:border-coral'
            : 'border-accent/40 focus:border-accent',
        )}
      />
      {errors[field.name] && (
        <span className='text-coral sm:text-md text-sm font-semibold -mt-1.5'>
          {errors[field.name]}
        </span>
      )}
    </motion.label>
  );
};
