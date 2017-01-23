var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  console.log('I should be doing prequalify stuff....');
  next();
});

router.route('/prequalify')

  .get(function(req, res){
    res.json({'message': 'GET'});
  })

  .post(function(req, res){
    res.json({'message':'POST'});
  });

  module.exports = router;
