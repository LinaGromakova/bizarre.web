import { formFields } from '../config/formFields.config';
import { HeaderForm } from './HeaderForm/HeaderForm';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { FormField } from './FormField/FormField';
import ModalInfo from '@/modules/modalInfo';
import { useFeedbackForm } from '../hooks/useFeedbackForm';

const FeedbackForm = () => {
  const { errors, isLoading, status, setStatus, onSubmit } = useFeedbackForm();

  return (
    <section className='relative h-full flex items-center justify-center px-6 py-16 overflow-hidden'>
      <ModalInfo
        status={status}
        setStatus={setStatus}
      />
      <form
        action='#'
        onSubmit={(e) => onSubmit(e)}
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
