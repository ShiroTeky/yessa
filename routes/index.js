/*var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
//Nouvelle ajout
exports.index = function (req, res) {
    res.render('index', { title: 'Index', year: new Date().getFullYear() });
};

exports.product = function (req, res) {
    res.render('product', { title: 'Product', year: new Date().getFullYear(), message: 'Your Product page' });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.send=function(req, res){

	var nodemailer = require('nodemailer');
  	var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  	var smtpTrans = nodemailer.createTransport("SMTP", {
  		service: "Gmail",
  		auth: {
    			XOAuth2: {
      				user: "tecleky.nguessan@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
			    	clientId: "994228787511-b3ivsk9glpv3s0feoop3f4rvri4h1vo2.apps.googleusercontent.com",
			    	clientSecret: "k6E9fW92baioHpxT4okHraY7",
			    	refreshToken: "1/JUbPirkNUchSW5dWTx4Uayh2C09oahdpAWufOeyrGRE"
    			}
  		}
	});
  //Mail options
  	mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'tecleky.nguessan@gmail.com',
      subject: 'Website contact form',
      generateTextFromHTML: true,
      text: req.body.textarea
  	};
  	smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
           res.render('contact', { title: 'Yessa Request - Contact', message: 'Error occured, message not sent.',
            error: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
           res.render('contact', { title: 'Yessa Request- Contact', message: 'Message sent! Thank you.', 
           	error: false, page: 'contact' })
       }
       smtpTrans.close();
    
	});
};