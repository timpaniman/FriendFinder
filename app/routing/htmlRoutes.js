var path = require("path");
var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/survey", function(req, res) {

        // Test it
        console.log('The solution is: survey');
        console.log(friendsData);

        // Test it
        // return res.send(data);

        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });
    app.get("/", function(req, res) {

        console.log('The solution is /: ');

        // Test it
        // return res.send(data);

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("*", function(req, res) {

        console.log('The solution is *: ');

        // Test it
        // return res.send(data);

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}