const path = require("path");
//const calenderAppScriptFile = require("../public/assets/js/updateEvents.js");



module.exports = (app) => {

    // displays JSON of all the friends
    app.get("/api/userDashboard", (req, res) => {
        //res.json(friends);
        console.log("test");

        res.json(newEvent);
    });

    // app.post("/api/userDashboard", (req, res) => {

    //     //const newEventName = req.body.newEventDescription;

    // });
// api/updateEvents
    app.post("/api/updateEvents", (req, res) =>{
        console.log("testing");
        console.log(req.body);

        res.json(req.body);

        // req.json(newEvent);
        // req.end();
    });
};