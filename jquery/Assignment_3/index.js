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
    $("#fade-to").click(function() {
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
    $("#appendTo").click(function() {
        $("<h5>JQUERY IS COOL :))</h5>").appendTo(".data");
    });
    $("#slideToggle").click(function() {
        $("#panel").slideToggle("slow");
    });
    $("#stopSliding").click(function() {
        $("#panel").stop();
    });
    $("#animate").click(function() {
        $("#box").animate({ left: "100px" }, "slow");
        $("#box").animate({ fontSize: "3em" }, "slow");
    });
    $("#display").click(function() {
        alert("HTML: " + $("html").html());
    });
    $("#getInput").click(getValue);
    $("#getAPI").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            success: function(response) {
                console.log(response);
                alert("Data received");
            },
        });
    })
    $("#DisplayAPI").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            success: function(response) {
                console.log(response);
                for (let i = 0; i < response.length; i++) {
                    let info = response[i];
                    $("<h5>" + info.title + "</h5>").appendTo(".data");
                }
            }
        });
    })
    $("#DeleteAPI").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "DELETE",
            success: function() {
                alert("Record Deleted");
                location.reload();
            }
        });
    })

    $("#before").click(function() {
        $(".data").before("<p><b>Pakistan</b></p>");
    });
    $("#after").click(function() {
        $(".data").after("<p><b>Pakistan</b></p>");
    });
    $("#bindMe").bind("click", function() {
        alert("Bind Method Called.");
    });
});

function hide() {
    $("div").hide();
    alert("Some data will be hidden");
}

function getValue() {
    alert("Input: " + $("#inputText").val());
};