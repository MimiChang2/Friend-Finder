// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//import routes- express is going to use these routes...
var htmlRoutes = require("./routing/htmlRoutes.js");
var apiRoutes = require("./routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//call the routing
htmlRoutes(app);
apiRoutes(app);

//listen function - "server is listening on port.... "
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
