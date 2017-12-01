const path = require("path");

const db = require("../models");



module.exports = (app) => {



    app.get("/api/userDashboard", (req, res) => {
        
        console.log("testing: GET api/userDashboard Route");

        
        res.json(req.body); //This returns an empty right now since not doing anything yet
    });



    app.post("/api/updateEvents", (req, res) => {

        console.log("testing api/updateEvents");
        console.log(req.body);

        res.json(req.body);


        // req.json(newEvent);
        // req.end();

    });
};

