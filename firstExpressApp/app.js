const express = require("express");
const app = express();

app.get("/", (req,res)=>{
	res.send("Hello there, welcome to my assignment!!");
});
app.get("/bye", (req,res)=>{
	res.send("Goodbye!!");
});
app.get("/dog", (req,res)=>{
	res.send("MEOW!!");
});
app.get("/r/:subDirectionName", (req,res)=>{
    const subName = req.params;
	console.log(subName);
	res.send(`Welcome to ${subName.subDirectionName.toUpperCase()} page`);
});
app.get("/r/:subDirectionName/comments/:id/:title", (req,res)=>{
	const subName = req.params;
	console.log(subName);
	res.send(`Page Comments from ${subName.title.toUpperCase()}`);
});

app.get("*", (req,res)=>{
	res.send("Page no found");
});
app.listen("3000", () =>{
	console.log("Now it is serving... in http://localhost:3000");
});