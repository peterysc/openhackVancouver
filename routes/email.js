var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
	service:'Hotmail',
	auth: {
		user: 'cpen391sender@outlook.com',
		pass: 'jasonisgod1'
	}
});

var options = {
    from: '"Fred Foo 👥" <cpen391sender@outlook.com>', // sender address
    to: 'andyytung@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
}

// post method for sending the mail with param field content
router.post('/', function(req, res){
	// send mail with defined transport object
	transporter.sendMail(options, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	    res.sendStatus(200);
	});
});

module.exports = router;