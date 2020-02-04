$(document).ready(function() {
    
    //var alts = $("[alt]");

    var $alts = $("img");
    var $entrada = $(":input");
    var $ahora = $();
    $alts.on("click", function() {

        $alts.each( function (index, value) {             
             alert(index+" "+$(value).attr("alt"));
             //console.log($(this).attr("alt"));    
        });
    })

    $entrada.on("click", function() {
        $entrada.addClass("pepe");
        alert("el valor del campo es: "+$entrada.val());
    })
    

})