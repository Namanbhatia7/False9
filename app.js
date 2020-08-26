//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/index.html`);
    
});

app.get("/competitions", function(req,res){

var options ={
    url: "https://api.football-data.org/v2/competitions/",
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
    var allData = dataset.count;
    // var names = [];
    

    // for(let i=0; i<allData; i++){

        // if(dataset.competitions[i].plan === "TIER_ONE"){
        // names[i] = dataset.competitions[i].name;    
        
        res.render("competitions",{ 
            noOfComp: allData,
            displayData: dataset
        });
             
        // }
    // }

    
})

})

app.listen(3000, function(){
    console.log("Server is Running on Port 3000");

});
