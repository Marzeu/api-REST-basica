const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: 'test@example.com',
//   from: 'marza@marza.com.br',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }  

exports.send = async (to, subject, body) => {
    sgMail
        .send({
            to: to,
            from: 'marzahell@hotmail.com',
            subject: subject,
            html: body
        })
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}

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