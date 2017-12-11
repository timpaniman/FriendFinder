var path = require("path");
var friendsData = require("../data/friends");
var fs = require('fs');

module.exports = function(app) {



    app.get("/api/friends", function(req, res) {

        console.log('The solution is get: ');
        console.log(friendsData);
        // return res.send(data);
        res.json(friendsData);
        //  res.render("home.html", { friendsData });
        console.log(friendsData);
    });



    app.post("/api/friends", function(req, res) {

        console.log('The solution is post: ');
        // console.log(req.body.scores[]);
        //friendsData.push(req.body);
        // Find the best match logic
        //  for (var i = 0; i < friendsData.length; i++) {
        //      console.log(friendsData[i].scores[0] - req.body.scores[0])

        //  }
        var q1 = parseInt(req.body.q1);
        var q2 = parseInt(req.body.q2);
        var q3 = parseInt(req.body.q3);
        var q4 = parseInt(req.body.q4);
        var q5 = parseInt(req.body.q5);
        var q6 = parseInt(req.body.q6);
        var q7 = parseInt(req.body.q7);
        var q8 = parseInt(req.body.q8);
        var q9 = parseInt(req.body.q9);
        var q10 = parseInt(req.body.q10);

        newPerson = {
            name: req.body.name,
            photo: req.body.photo,
            scores: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        }

        var matchScore = Array();
        var matchScoreIndex = Array();
        // Find the best match logic
        for (var i = 0; i < friendsData.length; i++) {

            matchScore[i] = (
                Math.abs(friendsData[i].scores[0] - newPerson.scores[0]) +
                Math.abs(friendsData[i].scores[1] - newPerson.scores[1]) +
                Math.abs(friendsData[i].scores[2] - newPerson.scores[2]) +
                Math.abs(friendsData[i].scores[3] - newPerson.scores[3]) +
                Math.abs(friendsData[i].scores[4] - newPerson.scores[4]) +
                Math.abs(friendsData[i].scores[5] - newPerson.scores[5]) +
                Math.abs(friendsData[i].scores[6] - newPerson.scores[6]) +
                Math.abs(friendsData[i].scores[7] - newPerson.scores[7]) +
                Math.abs(friendsData[i].scores[8] - newPerson.scores[8]) +
                Math.abs(friendsData[i].scores[9] - newPerson.scores[9]));
            matchScoreIndex[i] = { ind: i, val: matchScore[i] };
        };

        matchScore.sort();
        console.log(matchScore);
        console.log(matchScoreIndex);

        var bestMatch = matchScore[0];
        //res.json(friendsData[bestMatch]);

        var bestMatchInd;
        for (var j = 0; j < matchScoreIndex.length; j++) {
            if (matchScoreIndex[j].val == bestMatch) {
                bestMatchInd = j;
                break;
            }
        }
        console.log(bestMatchInd);
        console.log(friendsData[bestMatchInd]);
        res.json(friendsData[bestMatchInd]);
        //res.end();
        friendsData.push(newPerson);
        // console.log(friendsData);
        var json = 'var friendsArray = ' + JSON.stringify(friendsData) + ' \n module.exports = friendsArray;';

        // fs.unlinkSync('./app/data/friends.json');
        fs.writeFile('./app/data/friends.js', json);


        // return res.send(data);

        //  res.render("home.html", { friendsData });
    });
}