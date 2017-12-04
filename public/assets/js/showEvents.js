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


                $("#eventsDisplay").append(eventsSection);

                const individualEventButton = $("<button/>",{
                    text: "update",
                });
                // individualEventButton.append('<input type="button" value="My button">').button();
                individualEventButton.addClass("individualEventButton");
                eventsSection.append(individualEventButton);
        
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