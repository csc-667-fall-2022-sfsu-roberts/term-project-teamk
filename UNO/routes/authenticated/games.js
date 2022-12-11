
const { response } = require("express");
const express = require("express");
const protect = require("../../app-config/protect");
const router = express.Router();


const Games = require('../../db/games');

router.post('/create',(res,req) => {

    const {userId} = request.session;
    const {title} = request.body;

    Games.create(userId,title) 
    .then(({game_id}) => {
        res.redirect(`/games/${game_id}`)
    })
    .catch((err) => {
        console.log(err);
        res.statusCode(500).send();
    })
})



router.get("/:id",(request, response)=>{
    const {id} =request.params;

    response.render("authenticated/games", {id});

});

router.get("/:id/:message", (request, response)=>{
    const {id, message} = request.params;

    response.render("authenticated/games", {id, message});
});

module.exports = router;
