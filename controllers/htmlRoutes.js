const path = require("path");




module.exports = (app) => {
    app.get("/", function (req, res) {
        //res.sendFile(path.join(__dirname, "../public/survey.html"));
        res.send("Hello Test!");
    });

    // If no matching route is found, we default to home
    app.get("*", (req, res) => {
        //res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};