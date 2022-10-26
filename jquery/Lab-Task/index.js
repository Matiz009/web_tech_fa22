$(document).ready(function(){
    $("#btn-get").click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            success: function(response){
                console.log(response);
                for (let i = 0; i < response.length; i++) {
                    let data = response[i];
                    $("<tr>"+"<td>"+"Id:"+ data.id+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
                    $("<tr>"+"<td>"+"Title:"+ data.title+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
                    $("<tr>"+"<td>"+"Body:"+ data.body+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
                    $("<hr></hr>").appendTo("#apiData");
                }
            }
        })
    })
    $("#add").click(function(){
        let id=$("#inp_ID");
        let title =$("#inputTitle");
        let body= $("#inputBody");
            $("<tr>"+"<td>"+"Id:"+ id.val()+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
            $("<tr>"+"<td>"+"Title:"+ title.val()+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
            $("<tr>"+"<td>"+"Body:"+ body.val()+ "<br>"+ "</td>"+"</tr>").appendTo("#apiData");
            $("<hr></hr>").appendTo("#apiData");
            alert("Data Inserted");
    })
    $("#restart").click(function(){
       location.reload();
    })
})