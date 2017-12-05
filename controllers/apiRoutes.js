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
    app.delete("/api/events/:id", function (req, res) {
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
    app.put("/api/events", function (req, res) {
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


};