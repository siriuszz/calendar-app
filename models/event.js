// Dependencies
// =============================================================

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates an "Event" model that matches up with DB
var Event = sequelize.define("event", {
    eventName: Sequelize.STRING,
    category: Sequelize.STRING,
    date: Sequelize.INTEGER,
}, {
    timestamps: true
});

// Syncs with DB
Event.sync();

module.exports = Event;
