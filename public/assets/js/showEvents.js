$(document).ready(function () {

    // const displayEventsSection = $("#eventsDisplay");
    // const newEventDisplayPanel = $("<div>");

    // const newEventTitlePanel = $("<h2>");

    // const newEventDatePanel = $("<small>");

    // const newEventDescriptionPanel = $("<p>");

    // const emptyEventsContainer = [];

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

        // for (var i = 0; i < data.length; i++) {

        //     var eventsSection = $("<div>");
        //     eventsSection.addClass("event");

        //     eventsSection.append("<h2>" + data[i].title + " event.. </p>");
        //     eventsSection.append("<h3>" + data[i].date + "</p>");
        //     eventsSection.append("<p>" + data[i].description + "</p>");
        //     //eventsSection.append("<p>At " + moment(data[i].date).format("h:mma on dddd") + "</p>");

        //     $("#eventsDisplay").append(eventsSection);

        // }


        // function createEventSection() {
        //     var eventsSection = $("<div>");
        //     eventsSection.addClass("event");

        //     eventsSection.append("<p>" + data.title + " event.. </p>");
        //     eventsSection.append("<p>" + data.date + "</p>");
        //     eventsSection.append("<p>" + data.description + "</p>");
        // }

        displayData.forEach((object) => {
            var eventsSection = $("<div>");
            eventsSection.addClass("event");

            eventsSection.append("<h2>" + object.title + " event.. </p>");
            eventsSection.append("<h3>" + object.date + "</p>");
            eventsSection.append("<p>" + object.description + "</p>");

            $("#eventsDisplay").append(eventsSection);

        });


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