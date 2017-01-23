var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  console.log('I should be doing something....');
  next();
});

router.get('/',function(req, res){
  res.json({'message':'breakout-fundera'});
});

module.exports = router;
