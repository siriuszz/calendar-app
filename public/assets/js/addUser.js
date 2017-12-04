$("#submit").on("click", ((user) {
    user.preventDefault();

    // Getting the users, and their events
    getUsers();


    // A function to get users and then render list of users
    function getUsers() {
        $.get("/api/users", renderUserList);
    }
    // Function to either render a list of users or go to Add User page
    function renderUserList(data) {
        if (!data.length) {
            window.location.href = "/users";
        }
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
        }
        userSelect.empty();
        console.log(rowsToAdd);
        console.log(userSelect);
        userSelect.append(rowsToAdd);
        userSelect.val(userId);
    }

    // Create the user list in the dropdown
    function createUserRow(user) {
        var listOption = $("<option>");
        listOption.attr("value", user.id);
        listOption.text(user.name);
        return listOption;
    }

    // Update a given event, then land on the dashboard
    function updateEvent(event) {
        $.ajax({
            method: "PUT",
            url: "/api/events",
            data: event
        })
            .done(function() {
                window.location.href = "/userDashboard";
            });
    }
});
