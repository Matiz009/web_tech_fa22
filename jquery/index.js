$(function() {
    $("#addButton").click(handleBtn);
});

function handleBtn() {
    var newTodo = $("#newTodo").val();
    if (!newTodo) {
        $("#newTodo").addClass("error");
        return;
    }
    $("#todo").append("<li>" + newTodo + "</li>");
    $("#newTodo").val("");
}