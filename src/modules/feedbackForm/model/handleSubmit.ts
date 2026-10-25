import sendMessage from '../api/sendMessage';
const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  const form = e.currentTarget;
  const formData = new FormData(e.currentTarget);
  const userEmail = formData.get('userEmail');
  const userName = formData.get('userName');
  const orderDesc = formData.get('orderDesc');

  const params = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_USER_ID,
    template_params: {
      userName: userName,
      userEmail: userEmail,
      orderMessage: orderDesc,
      order_id: Date.now().toString(),
    },
  };
  form.reset();
  sendMessage(params);
};
export default handleSubmit;
 