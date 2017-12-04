$(document).ready(function () {

    const displayEventsSection = $("#eventsDisplay");
    const newEventDisplayPanel = $("<div>");

    const newEventTitlePanel = $("<h2>");

    const newEventDatePanel = $("<small>");

    const newEventDescriptionPanel = $("<p>");

    const emptyEventsContainer = [];

    $.get("/api/events/", function (data) {
        //console.log(data.id);
        // $("#eventsDisplay").append("<h1>" + data[0].title);

        // function showEvents(object) {


        //     // $("#eventsDisplay").append("<br>");
        //     // $("#eventsDisplay").append("<h2>" + object.title);
        //     // $("#eventsDisplay").append("<h3>" + object.date);
        //     // $("#eventsDisplay").append("<h3>" + object.description);
        //     // $("#eventsDisplay").append("<br>");

        //     $(".eventsDisplayStyle").append(emptyEventsContainer);
        //     $(".eventTitle").append("<h2>" + object.title);
        //     $(".eventDate").append("<h3>" + object.date);
        //     $(".eventDescription").append("<h3>" + object.description);
        //     $(".eventsDisplayStyle").append("<br>");
        // }

        const displayData = data;

        // displayData.forEach((object) => {
        //     // $("#eventsDisplay").append("<br>");
        //     // $("#eventsDisplay").append("<h2>" + object.title);
        //     // $("#eventsDisplay").append("<h3>" + object.date);
        //     // $("#eventsDisplay").append("<h3>" + object.description);
        //     // $("#eventsDisplay").append("<br>");
        //     showEvents(object);
        //     // How add a css property dynamically
        //     // $("#eventsDisplay").append("<h3>" + object.description).css("font-size", "50px");
        // });

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("event");

            row.append("<p>" + data[i].title + " event.. </p>");
            row.append("<p>" + data[i].date + "</p>");
            // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#eventsDisplay").append(row);

        }


        if (data) {

            // $("#eventsDisplay").append(data);
            // console.log("testing this out", data);

        }
    });

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();

        window.location.replace('/userDashboard');

    }));

});