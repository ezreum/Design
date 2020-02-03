$(document).ready(function() {
    
    //var alts = $("[alt]");

    var $alts = $("img");
    var $entrada = $(":input");
    
    $alts.on("click", function() {

        $alts.each( function (index, value) {             
             alert(index+" "+$(value).attr("alt"));
             //console.log($(this).attr("alt"));    
        });
    })

    $entrada.on("click", function() {
        
        alert($entrada.val());
    })
    

})