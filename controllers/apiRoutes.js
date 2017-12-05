
const path = require("path");
const db = require("../models");
const express = require('express');
const passport = require('passport');
const router = express.Router();

const env = {
  AUTH0_CLIENT_ID: 'wFzAgdYyUP8ndKct9jPdvnduGz0i6YSf',
  AUTH0_DOMAIN: 'kishanpatel.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Perform the login
router.get(
  '/login',
  passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    res.redirect('/');
  }
);

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/login',
    successRedirect:'/showEvents'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  }
);






    router.get("/api/userDashboard", (req, res) => {

        res.json(req.body); 
    });

    router.get("/api/events/", function (req, res) {
        db.Event.findAll({})
            .then(function (dbEvent) {
                res.json(dbEvent);
            });
    });

    router.post("/api/updateEvents", (req, res) => {

        console.log("testing api/updateEvents");
        console.log(req.body);

        db.Event.create({
                title: req.body.newEventNameInput,
                description: req.body.newEventDescriptionInput,
                date: req.body.newEventDateInput,
                public: req.body.newEventPublicCheckbox
            })
            .then(function () {
                //res.json(dbPost);
            });
    });

    //======STAR=====DELETE and PUT routes ====================
    // DELETE route for deleting events
    router.delete("/api/events/:id", function (req, res) {
        db.Event.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbEvent) {
                res.json(dbEvent);
            });
    });

    // PUT route for updating events
    router.put("/api/events", function (req, res) {
        db.Event.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbEvent) {
                res.json(dbEvent);
            });
    });
    //======END-STAR=====DELETE and PUT routes ================



module.exports = router;

