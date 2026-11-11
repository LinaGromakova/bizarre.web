export const formFields = [
  {
    name: 'userName',
    label: 'Имя',
    type: 'text',
    component: 'input' as const,
    validation: {
      required: true,
      minLength: 2,
      errorMessage: 'Имя должно содержать минимум 2 символа',
    },
  },
  {
    name: 'userEmail',
    label: 'Электронная почта',
    type: 'email',
    component: 'input' as const,
    validation: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      errorMessage: 'Введите корректный email адрес',
    },
  },
  {
    name: 'orderDesc',
    label: 'Описание заказа',
    type: 'text',
    component: 'textarea' as const,
    validation: {
      required: true,
      minLength: 200,
      errorMessage: 'Опишите заказ подробнее (минимум 200 символов)',
    },
  },
] as const;
