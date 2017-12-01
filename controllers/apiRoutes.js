const path = require("path");

const db = require("../models");



module.exports = (app) => {



    app.get("/api/userDashboard", (req, res) => {
        //res.json(friends);
        console.log("test");

        res.json(newEvent);
    });



    app.post("/api/updateEvents", (req, res) => {

        console.log("testing api/updateEvents");
        console.log(req.body);

        res.json(req.body);


        // req.json(newEvent);
        // req.end();

    });
};

