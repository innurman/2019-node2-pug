$("#bt").click(function(){
    $.ajax({
        url: "/api/get",
        type: "GET",
        dataType: "json",
        success: function(res) {
            console.log(res);
        },
        error: function(xhr, status, error) {
            console.log(xhr);
        }
    });
});