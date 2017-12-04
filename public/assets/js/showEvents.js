$(document).ready(function () {

    const displayEventsSection = $("#eventsDisplay");

    $.get("/api/events/", function (data) {
        //console.log(data.id);
        $("#eventsDisplay").append("<h1>" + data[0].title);

        const displayData = data;
        displayData.forEach((object) => {
            $("#eventsDisplay").append("<br>");
            $("#eventsDisplay").append("<h2>" + object.title);
            $("#eventsDisplay").append("<h3>" + object.date);
        });
        //$("#eventTitle").append("<h1>" + data[0].title );

        if (data) {
            
            $("#eventsDisplay").append(data);
            console.log("testing this out", data);

        }
    });

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();

        window.location.replace('/userDashboard');

    }));

});