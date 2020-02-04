const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/welcome/:user", (req,res)=>{
    const user = req.params.user;
    res.render("welcome.ejs",{ userTest: user});
});

app.get("*", (req,res)=>{
    res.render("errorPage.ejs");
});

app.listen("3000", ()=>{
    console.log("serving in port 3000...")
})
