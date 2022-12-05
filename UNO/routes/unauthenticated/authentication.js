const express = require('express');
const router = express.Router();


router.get('/signup', (req,res,next) =>  {
  res.render('unauthenticated/signup', {});
});


router.get('/login', (req,res,next) =>  {
    res.render('unauthenticated/login', {});
});
  
  


module.exports = router;
