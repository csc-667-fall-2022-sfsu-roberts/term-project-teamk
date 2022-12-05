const express = require('express');
const router = express.Router();


router.get('/', (req,res,next) =>  {
  res.render('unauthenticated/index', {title: 'hello'});
});



module.exports = router;
