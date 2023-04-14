import nodemailer from 'nodemailer';

const email = '1998bsuhe@gmail.com';
const pass = 'ydnbpfbeesanyveq';

export const trasnporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
};

// REDASH_MAIL_SERVER=smtp.gmail.com
// REDASH_MAIL_PORT=465
// REDASH_MAIL_USERNAME=1998bsuhe@gmail.com
// REDASH_MAIL_PASSWORD=ydnbpfbeesanyveq
// REDASH_MAIL_USE_SSL=true
// REDASH_MAIL_USE_TLS=false
