import FeedbackForm from '@/modules/feedbackForm';
import { Background } from './Background/Background';

const ContactsPage = () => {
  return (
    <div className='w-full h-screen bg-main flex flex-col justify-center relative'>
      <Background />
      <FeedbackForm />
    </div>
  );
};
export default ContactsPage;
