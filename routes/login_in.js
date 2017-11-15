var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Login in' });
  });
router.post('/user', function(req, res, next) {
   
  res.send(req.body)
});

module.exports = router;
