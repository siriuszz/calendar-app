//console.log("tesing Js"); this works!



$("#submit").on("click", ((event) => {
    event.preventDefault();
    //const currentURL = window.location.origin;

    // $.post(currentURL + "/api/userDashboard", newEvent, function () {

    //     console.log(data.newEventNameInput);
    // });
    // console.log(newEvent);

    const newEvent = {
        newEventNameInput: $("#newEventNameInput").val().trim(),
        newEventDateInput: $("#newEventDateInput").val().trim(),
        newEventCategoryInput: $("#newEventCategoryInput").val().trim(),
        //needs the public check mark input...
        newEventDescriptionInput: $("#newEventDescriptionInput").val().trim(),
    };

    console.log(newEvent);

    // Send an AJAX POST-request with jQuery
    $.post("/api/updateEvents", newEvent)
        // On success, run the following code
        .done(function () {


            console.log(newEvent);

        });

    

    

}));

