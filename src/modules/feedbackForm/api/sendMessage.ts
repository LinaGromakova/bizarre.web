interface ParamsInterface {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    userName: FormDataEntryValue | null;
    userEmail: FormDataEntryValue | null;
    orderMessage: FormDataEntryValue | null;
    order_id: string;
  };
}
const sendMessage = async (params: ParamsInterface) => {
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
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
export default sendMessage;
