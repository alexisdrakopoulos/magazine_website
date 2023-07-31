import sgMail from "@sendgrid/mail";

export const sendEmail = async (
  subject: string,
  text: string
): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "alexis.drakopoulos95@gmail.com",
    from: "alexis.drakopoulos95@gmail.com",
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent`);
  } catch (error: any) {
    console.error(error);
  }
};
