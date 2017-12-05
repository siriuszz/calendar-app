$(document).ready(function () {

    $(document).on("click", ".individualEventButton", handleEventDelete);

    $.get("/api/events/", (data) => {
        if (data) {
            const displayData = data;

            displayData.forEach((object) => {
                const eventId = object.id;
                const eventsSection = $("<div>");
                eventsSection.addClass("event");

                // $(".individualEventButton").data('id', eventId); //adds data-id to each individual button

                console.log(eventId);

                eventsSection.append("<h2>" + object.title);
                eventsSection.append("<h3>" + object.date);
                eventsSection.append("<p>" + object.description);
                $("#eventsDisplay").append(eventsSection);

                const individualEventButton = $("<button/>", {
                    text: "DELETE",
                });

                eventsSection.append(individualEventButton);
                individualEventButton.data('id', eventId);
                individualEventButton.addClass("individualEventButton");
            });
        } else {
            console.log("ERROR GETTING DATA");
        }
    });

    function handleEventDelete() {
        const id = $(this).data("id");
        console.log("Show Id: " + id);

        //debugger;
        // Send the DELETE request.
        $.ajax("/api/events/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    }

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();
        window.location.replace('/userDashboard');
    }));
});