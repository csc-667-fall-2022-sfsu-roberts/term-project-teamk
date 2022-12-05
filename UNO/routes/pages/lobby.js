const { response } = require("express");
const express =require("express");
const router =express.Router();


router.get("/",(request, response) =>{
    const {sessionID} = request;
    const { username } = request.session;

    console.log({username});
    response.render("public/lobby", { username, sessionID });
});

module.exports =router;