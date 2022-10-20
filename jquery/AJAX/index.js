$(function() {
    $("#load").click(sendAjax);
});

function sendAjax() {
    console.log("working");
    $.get("students.txt", handleResponse);
}

function handleResponse(response) {
    $("#result").empty();
    $("#result").append(response);
}