$(document).ready(function() {

    var $listas = $('#menu');
    
    $listas.on("li","click",function name(params) {
        alert();
        $(this).fadeToggle();
    });

});