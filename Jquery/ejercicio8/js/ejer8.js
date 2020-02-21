$(document).ready(function () {
    
    $('button').on("click", function() {
        console.log("aqui");
        $('#imagen').animate({
            "backgroundSize": "175%"},1000);
        })

});