const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

// function sendemail
const sendemail = (email,token) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.password_email
        }
    });
    
    let mailDetails = {
        from: `"Appro El massira Application" <${process.env.EMAIL}>`,
        to: email,
        subject: 'Verification pour vaidation email',
        text: 'testing mail',
        html: `<h2 >Pls Click on The link <a href="http://localhost:5000/api/auth/verifieremail/${token}">validation</a></h2>`, // html body
    };
    
    try {
        mailTransporter.sendMail(mailDetails)
        console.log('send email succefully (function)')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendemail