const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

(async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();


// const sendgrid = require('@sendgrid/mail');
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// exports.send = async (to, subject, body) => {
//     sendgrid.send({
//         to: to,
//         from: 'marza@marza.com.br',
//         subject: subject,
//         html: body
//     });
// }