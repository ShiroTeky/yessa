
function send_mail(sender,receiver){
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport();

  transporter.sendMail({
     from: sender,
     to: receiver,
     subject: 'hello',
     html: '<b>hello world!</b>'
     text: 'hello world!'
  });
}