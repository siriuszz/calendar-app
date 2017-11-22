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



