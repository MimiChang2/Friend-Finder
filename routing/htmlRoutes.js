//this file directs the flow of traffic

//GET route to /survey - goes to survey page
//default goes to home.html

app.get("/home", function(request, response) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(request, response) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
