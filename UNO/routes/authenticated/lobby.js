const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('authenticated/lobby',{})
})

module.exports = router;