
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
    res.render('login_in', { title: 'Login in' });
//   next()
  });
router.post('/user', function(req, res, next) {
    console.log('yes')
//     var user = req.body;
//     console.log(req.body)
//     var url = 'mongodb://nykolaychmut:Nnukoliaa250011$@cluster0-shard-00-00-iltqa.mongodb.net:27017,cluster0-shard-00-01-iltqa.mongodb.net:27017,cluster0-shard-00-02-iltqa.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
//     MongoClient.connect(url, function(err, db) {
//        var data = db.collection('db1');
//        data.find({"name": "ivan"}).toArray(function(err,doc){
//            console.log(err)
//            console.log(doc)
//        })
//     })
//    console.log(req.body)
   res.send(req.body)
});

module.exports = router;
