import { formFields } from '../config/formFields.config';
import handleSubmit from './handleSubmit';
import validateForm from './validateForm';

export const handleFormSubmit = async (
  e: React.SubmitEvent<HTMLFormElement>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setStatus: React.Dispatch<React.SetStateAction<number | undefined>>,
) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.currentTarget);
  const formErrors = validateForm(formData, formFields);

  if (Object.keys(formErrors).length > 0) {
    setLoading(false);
    setErrors(formErrors);
    return;
  }
  setErrors({});
  const result = await handleSubmit(e);
  setStatus(result);
  if (result) setLoading(false);
};
