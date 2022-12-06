const { response } = require("express");
const express =require("express");
const router =express.Router();


router.get("/",(request, response) =>{
    const { username, userId } = request.session;

    response.render("public/lobby", { username, userId });
});

module.exports =router;