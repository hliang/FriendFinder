// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, etc.
// ===============================================================================

var friendsArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // shows all friends data in JSON format
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // When a user submits form data (a JSON object),
    // the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // req.body is available since we're using the body parsing middleware
        // find the most similar friend
        let ret = null;
        let minDist = req.body.scores.length * 99;
        // compare the scores and find the friend with least difference
        for (let i=0; i < friendsArray.length; i++) {
            let currDist = 0;
            for (let j=0; j<req.body.scores.length; j++){
                currDist += Math.abs(friendsArray[i].scores[j] - req.body.scores[j]);
            }
            if (currDist <= minDist) {
                ret = friendsArray[i];
                minDist = currDist;
            }
        }
        // add the new user to friends database
        friendsArray.push(req.body);
        res.json(ret);
    });


};
