$(document).ready(function() {

    var nameInput = $("#user-name");
    var userList = $("tbody");
    var userContainer = $(".user-container");

    // Event listeners to create a new object and delete a user
    $(document).on("submit", "#user-form", handleUserFormSubmit);
    $(document).on("click", ".delete-user", handleDeleteButtonPress);

    // Get the list of users
    getUsers();

    function handleUserFormSubmit(event) {
        event.preventDefault();

        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }

        insertUser({
            name: nameInput
                .val()
                .trim()
        });
    }

    // Create a user.
    function insertUser(userData) {
        $.post("/api/users", userData)
            .then(getUsers);
    }

    // Create row of users
    function createUserRow(userData) {
        console.log(userData);
        var newTr = $("<tr>");
        newTr.data("users", userData);
        newTr.append("<td>" + userData.name + "</td>");
        newTr.append("<td><a href='/userDashboard?user_id=" + userData.id + "'>Create an Event</a></td>");
        newTr.append("<td><a class='delete-user'>Delete Author</a></td>");
        return newTr;
    }

    // Retrieve users
    function getUsers() {
        $.get("/api/users", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createUserRow(data[i]));
            }
            renderAuthorList(rowsToAdd);
            nameInput.val("");
        });
    }

    // List users
    function renderUserList(rows) {
        userList.children().not(":last").remove();
        userContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            userList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // // When there are no users
    // function renderEmpty() {
    //     var alertDiv = $("<div>");
    //     alertDiv.addClass("alert alert-default");
    //     alertDiv.text("You must create an Author before you can create a Post.");
    //     authorContainer.append(alertDiv);
    // }

    // Deleting a user
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("user");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id
        })
            .done(getUsers);
    }
});
