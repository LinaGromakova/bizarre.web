import { useEffect } from 'react';
import '../styles/animateModal.css';
import { MODAL_CONTENT } from '../config/modal.config';

const ModalInfo = ({
  status,
  setStatus,
}: {
  status: number | undefined;
  setStatus: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(undefined);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  const content = status && MODAL_CONTENT[status];
  if (!content) {
    return;
  }
  return (
    <div className='modal fixed z-2000 top-3 flex items-center justify-center inset-0 left-1/2 -translate-x-1/2 w-11/12 md:w-sm min-h-1/7 py-4 px-6 xs:text-xl text-base text-center h-fit bg-main/50 backdrop-blur-2xl border-l border-r border-accent text-accent'>
      <span className='w-5 mr-2'>{content.icon}</span>
      {content.message}
    </div>
  );
};

export default ModalInfo;
