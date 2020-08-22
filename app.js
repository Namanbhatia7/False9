//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(`${__dirname}/index.html`);
    
});

app.post("/", function(req,res){

var teamname = req.body.teamname;


})

app.listen(3000, function(){
    console.log("Server is Running on Port 3000");

});

