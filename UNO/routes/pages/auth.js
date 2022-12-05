const express =require("express");
const router =express.Router();

router.get('/login',(request, response)=> {
    response.render("public/login");
});
router.post("/login", (request, response)=>{
    const{ username, password}= request.body;

    // response.json({username, password})
    request.session.authenticated=true;
    request.session.username=username;

    response.redirect("/");
});
router.get("/signup", (request, response)=>{
    response.render("public/signup");
});

router.post("/signup", (request, response)=>{
    const{ username, password}= request.body;

    // response.json({username, password})
    request.session.authenticated=true;
    request.session.username=username;

    response.redirect("/");
});

module.exports=router;