import { useState } from 'react';
import { formFields } from '../config/formFields.config';
import { Background } from './Background/Background';
import { HeaderForm } from './HeaderForm/HeaderForm';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { handleFormSubmit } from '../model/handleFormSubmit';
import { FormField } from './FormField/FormField';

const FeedbackForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className='relative h-full flex items-center justify-center px-6 py-16 overflow-hidden'>
      <Background />
      <form
        action='#'
        onSubmit={(e) => {
          handleFormSubmit(e, setErrors, setIsLoading);
        }}
        className='relative z-10 w-full max-w-3xl flex flex-col gap-10'
      >
        <HeaderForm />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {formFields.map((field, idx) => {
            return (
              <FormField
                key={idx}
                idx={idx}
                errors={errors}
                field={field}
              />
            );
          })}
        </div>
        <SubmitButton isLoading={isLoading} />
      </form>
    </section>
  );
};

export default FeedbackForm;
