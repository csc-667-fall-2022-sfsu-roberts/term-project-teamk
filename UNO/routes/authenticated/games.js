const express = require('express');
const router = express.Router();

router.get('/:id',(req,res) => {
    res.render('authenticated/games', {})
})

module.exports = router;