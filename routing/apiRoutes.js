var friends = require("../app/data/friends.js");

// Get all info on everyone from the database
//GET route /api/friends- display a JSON of all possible friends.
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

    response.json(newperson);
});

//GET ROUTE to API/friends link , JSON data displayed when user clicks on the link on bottom of home page
