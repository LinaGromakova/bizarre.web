import { useState } from 'react';
import { handleFormSubmit } from '../model/handleFormSubmit';

export const useFeedbackForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<undefined | number>(undefined);
  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    handleFormSubmit(e, setErrors, setIsLoading, setStatus);
  };

  return { errors, isLoading, status, setStatus, onSubmit };
};
