var express = require('express');
var jwt     = require('jsonwebtoken');
var router = express.Router();


router.use(function(req, res, next){
  console.log('I should be doing prequalify stuff....');
// Validation
var token = req.body.token || req.headers['token'];
if(token){
  res.send('we have a token');
  jwt.verify(token,process.env.SECRETKEY, function(err, decode){
    if(err){
      res.status(500).send("Invalid Token");
    } else{
      next();
    }
  });
} else{
  res.send('pleas send a token');
}
/*
 * Notes for creating token
  var user = {
    username: 'test'
  }
  var token = token.sign(user,process.env.SECRETKEY,{
    expiresIn: 4000
  });

  res.json){
    success: true,
    token: token
  });*/
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
