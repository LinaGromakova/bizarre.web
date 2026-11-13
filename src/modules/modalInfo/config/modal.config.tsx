import AlertIcon from '../assets/Alert.svg?react';
import SuccessIcon from '../assets/Success.svg?react';

export interface ModalContentItem {
  message: string;
  icon?: React.ReactNode;
}

export const MODAL_CONTENT: Record<number, ModalContentItem> = {
  200: { message: 'Ваш заказ успешно создан!', icon: <SuccessIcon /> },
  400: {
    message:
      'Возникла ошибка, проверьте интернет-соединение и попробуйте позже',
    icon: <AlertIcon />,
  },
  500: {
    message: 'Произошла ошибка сервера, попробуйте позже',
    icon: <AlertIcon />,
  },
};
