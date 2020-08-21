//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.send("Initaializing app.js");
});

app.listen(3000, function(){
    console.log("Server is Running on Port 3000");

});

