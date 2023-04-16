import { mailOptions, trasnporter } from '@/utils/mail';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { mainInfo } = req.body;
    try {
      await trasnporter.sendMail({
        ...mailOptions,
        to: mainInfo.email,
        subject: 'Reservation',
        text: 'This is reservation email.',
        html: `<h3>Contact from : Ns travel</h3>
          <p>Dear, ${mainInfo.firstname}</p>
          <p>Your reservation is successfully applied.</p>
          <p>Our order manager will contact you in 1 week day.</p>
          <p>Thank you for choosing us</p>
          <p>Sincerly, Ns traverl</p>`,
      });
      await trasnporter.sendMail({
        ...mailOptions,
        to: mailOptions.from,
        subject: 'Reservation',
        text: 'This is reservation email.',
        html: `<h3>Contact from : ${mainInfo.firstname}</h3>
          <p>User information : ${JSON.stringify(mainInfo)}</p>`,
      });
      return res.status(200).json({
        message: 'Email successfully sended',
      });
    } catch {
      return res.status(404).end();
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'Hello world',
    });
  }
};
export default handler;
