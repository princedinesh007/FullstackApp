const nodemailer = require('nodemailer');

const resetToken=(token,email)=>{
    // Create a transporter using the SMTP settings from Mailtrap
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587, 
    auth: {
      user: '086007edd8e287', // Replace with your Mailtrap username
      pass: '405b22265067f5'  // Replace with your Mailtrap password
    }
  });
  const resetLink = `http://localhost:3000/resetpassword/${token}`;
  // Define email options
  const mailOptions = {
    from: 'DK Support <support@dk.com>', // Sender address
    to: email,    // List of recipients
    subject: 'Password Reset Mail',  // Subject line
    text: `Hello! This is a password reset email sent and Your token is${token}.`,
    html: `<p>Hello! This is a password reset email. To reset your password, please click the following link:</p><p><a href="${resetLink}">Reset Password</a></p><p>The link will expire in 10 minutes.</p>` 
  }
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  

}
module.exports={resetToken};