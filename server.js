// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import routes- express is going to use these routes...
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//listen function - "server is listening on port.... "

