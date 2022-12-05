const { response } = require("express");
const express =require("express");
const protect =require("../../app-config/protect");
const router =express.Router();

router.get("/:id",(request, response)=>{
    const {id} =request.params;

    response.render("public/game",{id});

});

router.get("/:id/:message", (request, response)=>{
    const {id, message}=request.params;

    response.render("public/game", {id, message});
});
module.exports=router;

