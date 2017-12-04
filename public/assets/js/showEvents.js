$(document).ready(function () {

    $.get("/api/events/", function (data) {

        // const displayData = data;

        // displayData.forEach((object) => {
        //     var eventsSection = $("<div>");
        //     eventsSection.addClass("event");

        //     eventsSection.append("<h2>" + object.title + " event.. </p>");
        //     eventsSection.append("<h3>" + object.date + "</p>");
        //     eventsSection.append("<p>" + object.description + "</p>");

        //     $("#eventsDisplay").append(eventsSection);

        // });


        if (data) {

            const displayData = data;

            displayData.forEach((object) => {
                var eventsSection = $("<div>");
                eventsSection.addClass("event");

                eventsSection.append("<h2>" + object.title + " event.. </p>");
                eventsSection.append("<h3>" + object.date + "</p>");
                eventsSection.append("<p>" + object.description + "</p>");

                $("#eventsDisplay").append(eventsSection);

            });

        }
    });

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();

        window.location.replace('/userDashboard');

    }));

});