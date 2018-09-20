const mailer = require('nodemailer');
require('dotenv').config();
const { welcome } = require('./welcome_template');

const getEmailData = (to, name, token, template) => {
    let data = null;

    switch (template) {
        case "welcome":
            data = {
                from: "Waves <anthony@ledesma.tech>",
                to,
                subject: `Welcome to waves ${name}`,
                html: welcome()
            }
            break;
        default:
            data;
    }

    return data;
}

const sendEmail = (to, name, token, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Outlook365",
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "anthony@ledesma.tech",
            pass: process.env.OUTLOOK_CRED,
        }
    });

    const mail = getEmailData(to, name, token, type)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('email sent')
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail } 