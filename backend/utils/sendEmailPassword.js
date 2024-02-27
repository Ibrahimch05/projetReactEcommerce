const nodemailer = require('nodemailer');
//------------- function verification password

const sendEmailPassword = (email,token) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.password_email
        }
    });
    
    let mailDetails = {
        from: `"Appro El massira" <${process.env.EMAIL}>`,
        to: email,
        subject: 'rest password',
        text: 'Node.js testing mail for GeeksforGeeks',
        html: `<h2 >Pls Click on The link <a href="http://localhost:5000/resetpassword/${token}">rest password</a></h2>`, // html body
    };
    
    try {
        mailTransporter.sendMail(mailDetails)
        .then(()=>{console.log("Email sent")})
    } catch (error) {
        console.log(error)
    }
}
module.exports = sendEmailPassword