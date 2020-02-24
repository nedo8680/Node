const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Este Objeto naturalmente viene de una base de datos se dejo acá para propositos demostrativos de un POST request

let games = [
    {title : "The Last Of Us", author: "Naughty Dog"},
    {title : "Mortal Kombat 11", author: "Warner Bros"},
    {title : "Pro evolution soccer 20", author: "Konami"}
];


app.use(bodyParser.urlencoded({extended:true})); // Esto nos permite obtener los datos mandados por el formulario(POST)
app.use(express.static("public")); // permite express incluir archivos estaticos al navegador tales como css, imegenes entre otros
app.set("view engine","ejs"); //permite el renderizado de archivos ejs

// post method

app.post("/addGame",(req, res)=>{
    const game = req.body.game ;   //aca es donde actua el body-parser. (Para traer la data del post mediante un objeto)
    games = [...games,{title: game} ] // No utilizamos push, utilizamos la sintaxis spread.
    res.redirect("/post");
})

// another methods
app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/welcome/:user", (req,res)=>{
    const user = req.params.user;
    res.render("welcome",{ userTest: user});
});

app.get("/post", (req,res)=>{
    res.render("post.ejs",{games: games});
});
app.get("*", (req,res)=>{
    res.render("errorPage");
});

app.listen("3000", ()=>{
    console.log("serving in port 3000...") 
})
