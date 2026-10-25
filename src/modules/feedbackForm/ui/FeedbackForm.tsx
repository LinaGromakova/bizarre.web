import { useState } from 'react';
import handleSubmit from '../model/handleSubmit';
import { formFields } from '../config/formFields.config';
import validateForm from '../model/validateForm';
import clsx from 'clsx';

const FeedbackForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <form
      action='#'
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formErrors = validateForm(formData, formFields);
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
          return;
        }
        setErrors({});
        handleSubmit(e);
      }}
      className='w-1/3 flex flex-col bg-red-300 mx-auto p-4'
    >
      {formFields.map((field) => {
        const Tag = field.component;
        return (
          <label
            key={field.name}
            className='flex flex-col gap-1'
          >
            <span className='font-medium text-gray-800'>{field.label}</span>
            <Tag
              type={field.component === 'input' ? field.type : undefined}
              name={field.name}
              className={clsx(
                'bg-white p-2 rounded border',
                errors[field.name]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300',
              )}
            />
            {errors[field.name] && (
              <span className='text-red-600 text-xs font-semibold mt-0.5'>
                {errors[field.name]}
              </span>
            )}
          </label>
        );
      })}
      <button className='cursor-pointer'>Отправить</button>
    </form>
  );
};
export default FeedbackForm;
