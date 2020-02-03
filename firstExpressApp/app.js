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
app.get("/speak/:animal/", (req,res)=>{
    let sounds ={
        pig : "Oink",
        cow : "Moo",
        dog : "Woof Woof",
        cat : "I hate u human..",
        goldfish : "..."
    }
    const animal = req.params.animal.toLocaleLowerCase();
    console.log(animal);
	res.send(`The ${animal} says "${sounds[animal]}"`);
});
app.get("/repeat/:word/:number", (req,res)=>{
	const subName = req.params;
    let output = repeatFunction(subName.word, parseInt(subName.number) );
    console.log(output);
	res.send(output);
});
app.get("*", (req,res)=>{
	res.send("Page no found");
});
app.listen("3000", () =>{
	console.log("Now it is serving... in http://localhost:3000");
});
const repeatFunction = (word, num) =>{
    let newWord = "";
    for (let i = 0; i < num; i++) {
        newWord += word + " ";
    }
    return newWord;
}