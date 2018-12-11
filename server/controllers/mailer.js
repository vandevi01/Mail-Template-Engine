const config = require("../services/config");
const sgMail = require('@sendgrid/mail');
const HttpStatus = require('http-status-codes');
const Handlebars = require('handlebars');
// Setting the API key for mailer
sgMail.setApiKey(config.mailKey);

/*
    Controller for sending mail to the receiver
*/
module.exports = {
    sendMail: (req, res) => {
        const {
            mailTemplate,
            templateData,
            receiverMail,
            senderMail,
            subject
        } = req.body;
        try {
            const compiledTemplate = Handlebars.compile(mailTemplate)(templateData);
            const msg = {
                to: receiverMail,
                from: senderMail,
                subject: subject,
                html: compiledTemplate,
            };
            sgMail.send(msg);
            res.sendStatus(HttpStatus.OK);
        } catch (e) {
            // Some error occurred while sending mail to the receiver
            res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
