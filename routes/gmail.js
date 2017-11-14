var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer'); 
var MongoClient = require('mongodb').MongoClient;

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
      }
    });
    var url = 'mongodb://nykolaychmut:Nnukoliaa250011$@cluster0-shard-00-00-iltqa.mongodb.net:27017,cluster0-shard-00-01-iltqa.mongodb.net:27017,cluster0-shard-00-02-iltqa.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
    MongoClient.connect(url, function(err, db) {
       var data = db.collection('db1');
       data.insert({
               "name": array.name,
               "age": array.password
           },function (err) {
               console.log(err)
               db.close();
           })
    });

    res.send(req.body)
    
});

module.exports = router;
