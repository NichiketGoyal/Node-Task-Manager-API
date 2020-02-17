const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'nichiket1998@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'nichiket1998@gmail.com',
        subject: "Final Good Bye from us.",
        text : `Good Bye ${name},It's hard to see you go, is there anything we could have done to keep you with us.` 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}