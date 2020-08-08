// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// exports.send = async (to, subject, body) => {
//     sgMail
//         .send({
//             to: to,
//             from: 'marzahell@hotmail.com',
//             subject: 'asda',
//             html: body
//         })
//         .then(() => { }, error => {
//             console.error(error);

//             if (error.response) {
//                 console.error(error.response.body)
//             }
//         });
// } 