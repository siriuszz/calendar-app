const path = require("path");

const db = require("../models");



module.exports = (app) => {



    app.get("/api/userDashboard", (req, res) => {

        console.log("testing: GET api/userDashboard Route");


        res.json(req.body); //This returns an empty object right now since not doing anything yet
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
                public: req.body.newEventPublicCheckbox
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });


    });
};