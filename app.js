function updatePlaceholders() {
    $("#emptyTask").toggle($("#taskList li").length === 1); // includes only placeholder
    $("#emptyCompleted").toggle($("#completedList li").length === 1);
}

function createTask(text) {
    const taskItem = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${text}</span>
            <div>
                <button class="btn btn-sm btn-success me-2 complete">Complete</button>
                <button class="btn btn-sm btn-outline-danger delete">Delete</button>
            </div>
        </li>
    `);

    taskItem.find(".delete").click(function () {
        taskItem.remove();
        updatePlaceholders();
    });

    taskItem.find(".complete").click(function () {
        taskItem.find(".complete").remove(); // remove the complete button
        $("#completedList").append(taskItem);
        taskItem.addClass("completed");
        updatePlaceholders();
    });

    $("#taskList").append(taskItem);
    updatePlaceholders();
}

// Call this on load to show the initial state
$(document).ready(function () {
    updatePlaceholders();

    $("#add").click(function () {
        const taskText = $("#task").val().trim();
        if (taskText !== "") {
            createTask(taskText);
            $("#task").val("");
        }
    });
});

