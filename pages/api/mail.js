// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, trasnporter } from '@/utils/mail';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { to, text, name, mainInfo } = req.body;
    if (!to || !text || !name) {
      return res.status(404).end();
    }
    try {
      await trasnporter.sendMail({
        ...mailOptions,
        to: to,
        subject: 'Contact',
        text: 'This is contact email.',
        html: `<h3>Contact from : ${name}</h3><p>${text}</p><hr/><hr/><p>${JSON.stringify(
          mainInfo
        )}</p>`,
      });
      return res.status(200).json({
        message: 'Email successfully sended',
      });
    } catch {}
  }

  return res.status(404).end;
};
export default handler;
