$(document).ready(function () {

    const displayEventsSection = $("#eventTitle");


    $.get("/api/events/", function (data) {
        //console.log(data.id);
        $("#eventTitle").append("<h1>" + data[0].title);

        const displayData = data;
        displayData.forEach((object) => {
            $("#eventTitle").append("<br>");
            $("#eventTitle").append("<h2>" + object.title);
            $("#eventTitle").append("<h3>" + object.date);
        });
        //$("#eventTitle").append("<h1>" + data[0].title );

        if (data) {
            // If this post exists, prefill our cms forms with its data
            //displayEventsSection.val(data.newEventNameInput);
            //displayEventsSection.val(data.title);

            //console.log(displayEventsSection.val(data.newEventNameInput));
            //console.log(displayEventsSection.val(data.title));

            //$("#displayEventsSection").html(data.title);
            $("#eventTitle").append(data);
            console.log("testing this out", data);


            console.log(data[0].title);









            // bodyInput.val(data.body);
            // postCategorySelect.val(data.category);
            // // If we have a post with this id, set a flag for us to know to update the post
            // // when we hit submit
            // updating = true;
        }
    });

    $("#goToAddEventsPageButton").on("click", ((event) => {
        event.preventDefault();






        window.location.replace('/userDashboard');



    }));

});