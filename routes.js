const express = require('express');
const router = express.Router();
var apiKey = process.env.API_KEY;
const request = require('request');
const ejs = require('ejs');


router.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);

});

router.get("/competitions", function (req, res,) {

    var options = {
        url: "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php",
        method: "GET",
    };

    request(options, function (error, response, body) {

        if (error) {
            console.log("ERROR");
        }

        else {
            console.log("SUCCESS");
        }

        var data = JSON.parse(body);
        var dataset = data.leagues;
        // var allData = dataset.count;

        // console.log(dataset.sports[0])

        // var i;
        // for (i = 0; i < dataset.sports.length; i++) {
        //     if(dataset.sports[i].strSport === "Soccer"){
        //         console.log(dataset.sports[i])
        //     }
        // }
        
        res.render("competitions", {
            displayData: dataset
        });

    })


})


router.get("/competitions/:name", function (req, res,) {

    var leaguecode = req.params.name

    var options = {
        url: "https://api.football-data.org/v2/competitions/" + leaguecode,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },

    };

    request(options, function (error, response, body) {

        if (error) {
            console.log("ERROR");
        }

        else {
            console.log("SUCCESS");
        }

        var dataset = JSON.parse(body);
        var seasons = dataset.seasons;
        var noOfSeasons = Object.keys(seasons).length;

        res.render("particularcompetition", {
            displayData: dataset,
            seasonCount: noOfSeasons

        });
    })
})

router.get('/:name/teams', (req, res) => {
    let leaguecode = req.params.name;
    var options = {
        url: "https://api.football-data.org/v2/competitions/" + leaguecode + '/teams',
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },
    };

    request(options, function (error, response, body) {
        var leagueData = JSON.parse(body);
        var allData = leagueData.count;

        res.render("teams", {
            no: allData,
            disData: leagueData
        });
    })
})

router.get('/:name/standings', (req, res) => {
    let leaguecode = req.params.name;
    var options = {
        url: "https://api.football-data.org/v2/competitions/" + leaguecode + '/standings',
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },

    };

    request(options, function (error, response, body) {

        var standingsData = JSON.parse(body);
        var standingCount = standingsData.standings[0].table;
        var noOfteams = Object.keys(standingCount).length;
        res.render("standings", {
            totalTeams: noOfteams,
            displayData: standingsData
        });
    })
})

router.get('/:name/scorers', (req, res) => {

    let leaguecode = req.params.name;
    console.log(req.query)
    var options = {
        url: "https://api.football-data.org/v2/competitions/" + leaguecode + '/scorers',
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },
    };

    request(options, function (error, response, body) {
        var scorersData = JSON.parse(body);
        var count = scorersData.count;

        res.render("scorers", {
            topScorers: count,
            displayData: scorersData
        });
    })
})

router.get('/teams/:code/:name', (req, res) => {

    let teamCode = req.params.code;
    console.log(req.query)
    var options = {
        url: "https://api.football-data.org/v2/teams/" + teamCode,
        method: "GET",
        headers: {
            "X-Auth-Token": apiKey
        },
    };

    request(options, function (error, response, body) {
        var teamData = JSON.parse(body);
        console.log(teamData);
        res.render("particularTeam", {
            teamData: teamData
        });
    })
})

module.exports = router;