const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

//creates the express server for node
const app = express();

const port = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// points our server to our different "route" files.
// This gives the server a "map" to respond when users visit or request data from various URLs.
// Must be placed below const app otherwise will return undefined!
//Sample routes not yet created:
//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});

