import { formFields } from '../config/formFields.config';
import handleSubmit from './handleSubmit';
import validateForm from './validateForm';

interface HandleFormSubmitInterface {
  e: React.SubmitEvent<HTMLFormElement>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const handleFormSubmit = async ({
  e,
  setErrors,
  setIsLoading,
  setStatus,
}: HandleFormSubmitInterface) => {
  e.preventDefault();
  setIsLoading(true);
  const formData = new FormData(e.currentTarget);
  const formErrors = validateForm(formData, formFields);

  if (Object.keys(formErrors).length > 0) {
    setIsLoading(false);
    setErrors(formErrors);
    return;
  }
  setErrors({});
  const result = await handleSubmit(e);
  setStatus(result);
  if (result) setIsLoading(false);
};
