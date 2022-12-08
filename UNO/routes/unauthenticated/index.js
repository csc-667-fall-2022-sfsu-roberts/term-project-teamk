const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response) =>{
  const {sessionID} = request;
  const{ username } = request.session;
  console.log({username});
  response.render("unauthenticated/index", { username, sessionID });
});

module.exports = router;