$(document).ready(function () {

    $.get("/api/events/", function (data) {
        if (data) {
            const displayData = data;

            displayData.forEach((object) => {
                const eventsSection = $("<div>");
                eventsSection.addClass("event");

                // eventsSection.append("<h2>" + object.title + " event.. </p>");
                eventsSection.append("<h2>" + object.title);
                eventsSection.append("<h3>" + object.date);
                eventsSection.append("<p>" + object.description);
                eventsSection.append("<br>");

                //eventsSection.append("<p>" + object.description + "</p>");

                $("#eventsDisplay").append(eventsSection);
                eventsSection.append("<button>");
                
            });
        } else {
            console.log("ERROR GETTING DATA");
        }
    });

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();

        window.location.replace('/userDashboard');
    }));
});