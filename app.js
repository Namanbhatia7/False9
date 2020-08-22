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

var options ={
    url: "https://api.football-data.org/v2/competitions/SA/scorers",
    method: "GET",
    headers: {
        "X-Auth-Token": "f24e3d3915fd4ee5a88568138ff0c652"
    },

    

};

request(options, function(error, response, body) {

    if(error){
        console.log("ERROR");
    }
    
    else{
        console.log("SUCCESS");
    }

    var dataset = JSON.parse(body);
    var names = dataset.scorers;               
    console.log(names);                         //Display names of Serie A top scorers
})


})

app.listen(3000, function(){
    console.log("Server is Running on Port 3000");

});

