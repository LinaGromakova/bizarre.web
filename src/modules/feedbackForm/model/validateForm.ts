interface BaseValidation {
  required: boolean;
  errorMessage: string;
}
interface TextValidation extends BaseValidation {
  minLength?: number;
  pattern?: never;
}

interface EmailValidation extends BaseValidation {
  pattern?: RegExp;
  minLength?: never;
}
type FieldValidation = TextValidation | EmailValidation;

export interface FormField {
  name: 'userName' | 'userEmail' | 'orderDesc' | string;
  label: string;
  type: string;
  component: 'input' | 'textarea';
  validation: FieldValidation;
}
const validateForm = (
  formData: FormData,
  formFields: FormField[],
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
