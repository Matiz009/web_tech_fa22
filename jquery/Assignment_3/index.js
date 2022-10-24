$(document).ready(function() {
    $("#hide-btn").click(hide);
    $("#change-btn").click(function() {
        $("#box").css("background-color", "green");
    });
    $("#refresh").click(function() {
        location.reload();
    });
    $("#fade-in").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $("#fade-out").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    $("#fade-toggle").click(function() {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

function hide() {
    $("div").hide();
}