$(document).ready(function() {

const displayEventsSection = $("#displayAllEventsSection");


$.get("/api/events/", function (data) {
    //console.log(data.id);

    if (data) {
        // If this post exists, prefill our cms forms with its data
        //displayEventsSection.val(data.newEventNameInput);
        //displayEventsSection.val(data.title);

        //console.log(displayEventsSection.val(data.newEventNameInput));
        //console.log(displayEventsSection.val(data.title));

        // $("#displayEventsSection").html(data.newEventNameInput);
        //$("#displayEventsSection").text(data);
        console.log("testing this out",data);
        //console.log(data.body.title);
        

        



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