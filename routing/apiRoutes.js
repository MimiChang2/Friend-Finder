var friends = require("../app/data/friends.js");

// Get all info on everyone from the database
//GET route /api/friends- display a JSON of all possible friends.

function apiRoutes(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

    //POST route /api/friends- handle incoming survey results, handle the compatibility logic
    //POST creates a friend object - name, photo, scores .. imports friends.js from the data folder

    app.post("/api/friends", function(request, response) {

        var newperson = request.body;
        newperson.routeName = newperson.name.replace(/\s+/g, "").toLowerCase();
        //when u create a new friend object, u push the friend object into array in friends.js
        console.log(newperson);
        //friends.push(objectcreated)
        friends.push(newperson);

        // response.json(newperson);

        //compatibility logic
        var scoreArray = newperson.score;
        var photo = "";
        var nameMatch = "";
        var difference = 70;

        for (var i = 0; i < friends.length; i++) {
            console.log("friends.length:" + friends.length);
            var diff = 0;
            for (var j = 0; j < scoreArray.length; j++) {
                console.log("name: " + friends[i].name + "\nscoreArray.length:" + scoreArray.length);
                diff += Math.abs(friends[i].score[j] - scoreArray[j]);
                console.log("diff = " + diff);
            }
            if (diff < difference && newperson.name !== friends[i].name) {
                difference = diff;
                nameMatch = friends[i].name;
                photo = friends[i].photo;
                console.log("The best match: " + nameMatch + photo);
            }
        }

        // friends.push(newperson);
        //this gets sent to client- this is the response body
        response.json({
            nameMatch: nameMatch,
            photo: photo
        });
    });
}


module.exports = apiRoutes;

//GET ROUTE to API/friends link , JSON data displayed when user clicks on the link on bottom of home page
