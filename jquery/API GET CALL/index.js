$(function() {
    loadData();
});

function loadData() {
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        success: function(response) {
            console.log(response);
            let recipes = $("#recipes");
            console.log(recipes);
            recipes.empty();
            console.log(recipes);
            for (var i = 0; i < response.length; i++) {
                var data = response[i];
                recipes.append("<div><h3>" + data.title + "</h3></div>");
            }
        },
    });
}