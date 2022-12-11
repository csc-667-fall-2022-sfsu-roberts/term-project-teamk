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

router.get("/signup", (request, response)=>{
    response.render("public/signup");
});

router.post("/signup", (request, response)=>{
    const{ username, email, password}= request.body;

    Users.signUp({username, email, password})
    .then(({id, username})=>{
        
        request.session.authenticated=true;
        request.session.userId= id;
        request.session.username= username;

        response.redirect("/lobby");
    })
    .catch(error=>{
        response.redirect("/auth/signup");
    });
});

router.get("/logout", (request, response)=>{
    response.render("public/logout");
});

router.post("/logout", (request, response) => {
    req.session.destroy((err) => {
        if (err) {
            errorPrint("session could not be destroyed.");
            next(err);
        } else {
            successPrint('Session was destroyed');
            res.clearCookie('csid')
            res.json({
                status: "OK",
                message: "user is logged out"
            });
        }
    });
    response.redirect("public/logout");
});

module.exports=router;