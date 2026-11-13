import type { FormFieldInterface } from '../types/interfaceFormField';

const validateForm = (
  formData: FormData,
  formFields: readonly FormFieldInterface[],
): Record<string, string> => {
  const newErrors: Record<string, string> = {};

  formFields.forEach((field) => {
    const value = formData.get(field.name)?.toString().trim() || '';

    if (field.validation.required && !value) {
      newErrors[field.name] = 'Это поле обязательно для заполнения';
      return;
    }
    if (
      field.validation.minLength &&
      value.length < field.validation.minLength
    ) {
      newErrors[field.name] = field.validation.errorMessage;
    }
    if (field.validation.pattern && !field.validation.pattern.test(value)) {
      newErrors[field.name] = field.validation.errorMessage;
    }
  });

  return newErrors;
};
export default validateForm;
