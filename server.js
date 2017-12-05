const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");



//creates the express server for node
const app = express();

const PORT = process.env.PORT || 3000;

//=======STAR======= This requires the Sequelize models for syncing
const db = require("./models");


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
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});