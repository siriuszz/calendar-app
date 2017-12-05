$(document).ready(function () {

    $(document).on("click", ".individualEventButton", handleEventDelete);

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

                const individualEventButton = $("<button/>", {
                    text: "DELETE",
                });
                // individualEventButton.append('<input type="button" value="My button">').button();
                individualEventButton.addClass("individualEventButton");
                eventsSection.append(individualEventButton);

            });
        } else {
            console.log("ERROR GETTING DATA");
        }
    });


    // This function does an API call to delete posts
    function deletePost(id) {
        $.ajax({
                method: "DELETE",
                url: "/api/events/" + id
            })
            .done(function () {
                //getPosts(postCategorySelect.val());
                //want to reload page...
            });
    }


    function handleEventDelete() {
        console.log("testing button");
        var currentEvent = $(this.id)
            .parent()
            .parent()
            .data("event");
        deletePost(currentEvent);
    }




    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();

        window.location.replace('/userDashboard');
    }));
});