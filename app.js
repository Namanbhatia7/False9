//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/index.html`);
    
});

var apiKey = 'f24e3d3915fd4ee5a88568138ff0c652';
app.get("/competitions", function(req,res,){

var options ={
    url: "https://api.football-data.org/v2/competitions/",
    method: "GET",
    headers: {
        "X-Auth-Token": apiKey
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
           
        res.render("competitions",{ 
            noOfComp: allData,
            displayData: dataset
        });
                
})


})

app.get("/competitions/:name", function(req,res,){

    var leaguecode = req.params.name

    var options ={
        url: "https://api.football-data.org/v2/competitions/" + leaguecode,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
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
        var seasons = dataset.seasons;

        var noOfSeasons = Object.keys(seasons).length;
        console.log(noOfSeasons);
               
            res.render("particularcompetition",{
                displayData: dataset,
                seasonCount: noOfSeasons

            });
                    
    })
    
    
    })

app.get('/:name/teams', (req,res) =>{

    let leaguecode = req.params.name;
    console.log(req.query)
    var options ={
        url: "https://api.football-data.org/v2/competitions/" + leaguecode +'/teams' ,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },   
    
    };

    request(options, function(error, response, body){

        var leagueData = JSON.parse(body);
        var allData = leagueData.count;

        res.render("teams",{ 
            no: allData,
            disData: leagueData
        });


    })


})

app.get('/:name/standings', (req,res) =>{

    let leaguecode = req.params.name;
    var options ={
        url: "https://api.football-data.org/v2/competitions/" + leaguecode +'/standings' ,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },   
    
    };

    request(options, function(error, response, body){

        var standingsData = JSON.parse(body);
        var standingCount = standingsData.standings[0].table;

        var noOfteams = Object.keys(standingCount).length;

        console.log(noOfteams);

        res.render("standings",{ 
            totalTeams: noOfteams,
            displayData: standingsData
        });


    })


})

app.get('/competitions/:name/scorers', (req,res) =>{

    let leaguecode = req.params.name;
    console.log(req.query)
    var options ={
        url: "https://api.football-data.org/v2/competitions/" + leaguecode +'/scorers' ,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },   
    
    };

    request(options, function(error, response, body){

        var scorersData = JSON.parse(body);
        var count = scorersData.count;

        res.render("scorers",{ 
            topScorers: count,
            displayData: scorersData
        });


    })


})

app.listen(3000, function(){
    console.log("Server is Running on Port 3000");

});
