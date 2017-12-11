//this file directs the flow of traffic
var path = require("path");

function htmlRoutes(app) {
    app.get("/survey", function(request, response) {
        return response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(request, response) {
        return response.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

module.exports = htmlRoutes;

// function htmlRoutes(app, route, res) {
//     if (route === "survey") {
//         return res.sendFile(path.join(__dirname + "/public/survey.html"));
//     }
//     return res.sendFile(path.join(__dirname + "/public/home.html"));
// }

//GET route to /survey - goes to survey page
//default goes to home.html
//put in server.js?


// app.post("../public/home", function(request, reponse) {
//     return response.sendFile(path.join(__dirname, "home.html"));
// });

// app.post("../public/survey", function(request, reponse) {
//     return response.sendFile(path.join(__dirname, "survey.html"));
// });
