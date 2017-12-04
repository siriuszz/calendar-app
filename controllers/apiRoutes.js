const path = require("path");

const db = require("../models");



module.exports = (app) => {



    app.get("/api/userDashboard", (req, res) => {

        console.log("testing: GET api/userDashboard Route");


        res.json(req.body); //This returns an empty object right now since not doing anything yet
    });

    app.get("/api/events/", function (req, res) {
        db.Event.findAll({})
            .then(function (dbEvent) {
                res.json(dbEvent);
                
            });
    });



    app.post("/api/updateEvents", (req, res) => {

        console.log("testing api/updateEvents");
        console.log(req.body);

        res.json(req.body);


        // req.json(newEvent);
        // req.end();



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
        app.delete("/api/events/:id", function(req, res) {
            db.Event.destroy({
                where: {
                    id: req.params.id
                }
            })
                .then(function(dbEvent) {
                    res.json(dbEvent);
                });
        });

        // PUT route for updating events
        app.put("/api/events", function(req, res) {
            db.Event.update(req.body,
                {
                    where: {
                        id: req.body.id
                    }
                })
                .then(function(dbEvent) {
                    res.json(dbEvent);
                });
        });
    //======END-STAR=====DELETE and PUT routes ================


    //=====STAR=====ROUTES for USERS ==========================

    // Find a user
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // Create a user
    app.post("/api/users", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // Delete the user
    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
    //======END - STAR ====ROUTES for USERS ====================
};