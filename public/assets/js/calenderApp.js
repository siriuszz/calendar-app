$(document).ready(function() {
    /* global moment */

    // myCalendar holds all of the user's events
    var myCalendar = $(".my-calendar");

    //====Do we need to keep categories? Remove if not. =======
    //var eventCategorySelect = $("#category");



    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleEventDelete);
    $(document).on("click", "button.edit", handleEventEdit);


    // Variable to hold our events
    var events;

    // The code below handles the case where we want to get events for a specific friend
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var userID;
    if (url.indexOf("?user_id=") !== -1) {
        userID = url.split("=")[1];
        getEvents(userID);
    }
    // If there's no userID we just get all friend events
    else {
        getEvents();
    }


    // This function grabs events from the database and updates the view
    function getEvents(user) {
        userId = user || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/events" + userId, function(data) {
            //console.log("Events", data);
            events = data;
            if (!events || !events.length) {
                displayEmpty(user);
            }
            else {
                initializeRows();
            }
        });
    }

    // This function does an API call to delete events
    function deleteEvent(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/events/" + id
        })
            .done(function() {
                getEvents();
            });
    }

    // InitializeRows handles appending all of our constructed events HTML inside myCalendar
    function initializeRows() {
        myCalendar.empty();
        var eventsToAdd = [];
        for (var i = 0; i < events.length; i++) {
            eventsToAdd.push(createNewRow(events[i]));
        }
        myCalendar.append(eventsToAdd);
    }

    // This function constructs an event's HTML
    function createNewRow(event) {

        var newEventPanel = $("<div>");
        newEventPanel.addClass("panel panel-default");
        var newEventPanelHeading = $("<div>");
        newEventPanelHeading.addClass("panel-heading");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        var newEventTitle = $("<h2>");
        var newEventDate = $("<small>");

    });

        var newEventPanelBody = $("<div>");
        newEventPanelBody.addClass("panel-body");
        var newEventBody = $("<p>");
        var newEventDate = $("<p>");
        newEventDate.text(event.date + " ");
        newEventTitle.text(event.title + " ");
        newEventBody.text(event.body);
        newEventPanelHeading.append(deleteBtn);
        newEventPanelHeading.append(editBtn);
        newEventPanelHeading.append(newEventTitle);
        newEventPanelHeading.append(newEventDate);
        newEventPanelBody.append(newEventBody);
        newEventPanel.append(newEventPanelHeading);
        newEventPanel.append(newEventPanelBody);
        newEventPanel.data("event", event);
        return newEventPanel;
        }

// This function figures out which event we want to delete and then calls deleteEvent
function handleEventDelete() {
    var currentEvent = $(this)
        .parent()
        .parent()
        .data("event");
    deleteEvent(currentEvent.id);
}

// This function figures out which event we want to edit and takes it to the appropriate url
function handleEventEdit() {
    var currentEvent = $(this)
        .parent()
        .parent()
        .data("event");
    window.location.href = "/cms?event_id=" + currentEvent.id;
}

// This function displays a messgae when there are no events
function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
        partial = " for User #" + id;
    }
    myCalendar.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No events yet" + partial + ", navigate <a href='/cms" + query +
        "'>here</a> in order to get started.");
    myCalendar.append(messageh2);
}

});
