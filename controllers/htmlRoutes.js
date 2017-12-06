const path = require("path");



module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.sendFile(path.join(__dirname, "../public/survey.html"));
        
        res.render('showEvents', {
            
        });
    });


    app.get("/register", (req, res) => {
        res.render('register', {
            
        });

    });
    //Where user adds in a new event. 
    app.get("/userDashboard", (req, res) => {
        res.render('userDashboard', {
            
        });

    });
    //Show events page. Where we plan to show the created events. 
    app.get("/showEvents", (req, res) => {
        res.render('showEvents', {
            
        });

    });

    //If no matching route is found, we default to home
    app.get("*", (req, res) => {
        //res.sendFile(path.join(__dirname, "../public/home.html"));
        //res.send("this is the catch all route");
        res.redirect("/");
    });

};
