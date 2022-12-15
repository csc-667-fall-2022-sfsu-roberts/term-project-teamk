const { request, response } = require("express");
const Users = require("../../db/users");
const express =require("express");
const router =express.Router();

router.get('/login',(request, response)=> {
    response.render("public/login");

});

router.post("/login", (request, response)=>{
    const{ username, password}= request.body;

    Users.login({username,password})
    .then(({id})=>{
        
        request.session.authenticated=true;
        request.session.userId= id;
        request.session.username= username;

        response.redirect("/lobby");
    })
    .catch(error=>{
        response.redirect("/auth/login");
    });
});

router.get("/register", (request, response)=>{
    response.render("public/register");
});

router.post("/register", (request, response)=>{
    const{ username, email, password}= request.body;

    Users.register({username, email, password})
    .then(({id, username})=>{
        
        request.session.authenticated=true;
        request.session.userId= id;
        request.session.username= username;

        response.redirect("/lobby");
    })
    .catch(error=>{
        response.redirect("/auth/register");
    });
});

router.get("/logout", (request, response)=>{
    response.render("public/logout");
});

router.post("/logout", (request, response) => {
    request.session.destroy((err) => {
        if (err) {
            errorPrint("session could not be destroyed.");
            next(err);
        } else {
            response.clearCookie('csid');
            response.render("public/index");
            /*response.json({
                status: "OK",
                message: "user is logged out"
            });*/
        }
    });
    
});

module.exports=router;