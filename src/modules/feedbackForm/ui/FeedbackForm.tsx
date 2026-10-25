const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userEmail = formData.get('userEmail');
    const userName = formData.get('userName');
    const orderDesc = formData.get('orderDesc');

    const params = {
      service_id: import.meta.env.SERVICE_ID,
      template_id: import.meta.env.TEMPLATE_ID,
      user_id: import.meta.env.USER_ID,
      template_params: {
        userName: userName,
        userEmail: userEmail,
        orderMessage: orderDesc,
        order_id: Date.now().toString(),
      },
    };
    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params),
        },
      );

      if (!response.ok) {
        throw response.status;
      }

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form
      action='#'
      onSubmit={(e) => handleSubmit(e)}
      className='w-1/3 flex flex-col bg-red-300 mx-auto p-4'
    >
      <label
        htmlFor=''
        className='flex flex-col'
      >
        Ваше имя
        <input
          type='text'
          required
          name='userName'
          className='bg-white'
        />
      </label>
      <label
        htmlFor=''
        className='flex flex-col'
      >
        Ваш адрес электронной почты
        <input
          type='email'
          required
          name='userEmail'
          className='bg-white'
        />
      </label>
      <label
        htmlFor=''
        className='flex flex-col'
      >
        Описание заказа
        <textarea
          name='orderDesc'
          id=''
          required
          className='bg-white'
        ></textarea>
      </label>
      <button className='cursor-pointer'>Отправить</button>
    </form>
  );
};
export default FeedbackForm;
