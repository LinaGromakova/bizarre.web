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

export interface FormFieldInterface {
  name: 'userName' | 'userEmail' | 'orderDesc' | string;
  label: string;
  type: string;
  component: 'input' | 'textarea';
  validation: FieldValidation;
}
