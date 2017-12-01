const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
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


// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'kishanpatel.auth0.com',
    clientID: 'wFzAgdYyUP8ndKct9jPdvnduGz0i6YSf',
    clientSecret: '7GwFfX03mfkUvD2eVMUMfXyEd5qkgmxgsQuoz9Kv6Kk8xmd3fG3ABPhbQgUxmVy8',
    callbackURL: 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());




app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// points our server to our different "route" files.
// This gives the server a "map" to respond when users visit or request data from various URLs.
// Must be placed below const app otherwise will return undefined!


var api = require("./controllers/apiRoutes");
app.use('/', api);

// require("./controllers/htmlRoutes.js")(app);


//=====STAR=====I don't think we need this. It worked with the code below.
// app.listen(PORT, () => {
//     console.log("App listening on PORT: " + PORT);
// });

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});




