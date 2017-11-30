const path = require("path");
//const calenderAppScriptFile = require("../public/assets/js/calenderApp.js");



module.exports = (app) => {

    // displays JSON of all the friends
    app.get("/api/userDashboard", (req, res) => {
        //res.json(friends);
        console.log("test");

        res.json(newEvent);
    });

    app.post("/api/userDashboard", (req, res) => {

        //const newEventName = req.body.newEventDescription;







    });
};