const path = require("path");




module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.sendFile(path.join(__dirname, "../public/survey.html"));
        //res.send("Hello Test!");
        res.render('index', {
            
        });
    });


    app.get("/register", (req, res) => {
        res.render('register', {
            
        });

    });
    //Where user adds in a todo, views a todo, etc. 
    app.get("/userDashboard", (req, res) => {
        res.render('userDashboard', {
            
        });

    });

    // If no matching route is found, we default to home
    // app.get("*", (req, res) => {
    //     //res.sendFile(path.join(__dirname, "../public/home.html"));
    //     //res.send("this is the catch all route");
    //     res.redirect("/");
    // });

};