$(document).ready(function() {
    
    //var alts = $("[alt]");

    var $alts = $("img");
    var $entrada = $(":input");
    var $ahora = $(".current");
    var $siguiente = $ahora.next();

    var $especialito=$("div#specials");

    var $deshabil = $("#slideshow");

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
    
    $ahora.one("mouseover", function () {
        alert("la clase current pasa de "+$ahora.text()+" a "+$siguiente.text());
        $ahora.removeClass("current");
        $siguiente.addClass("current");
    });

    $especialito.on("click", function () {
        if ($especialito.find("select") instanceof jQuery) {
            alert("hooooola soy el boton dentro del form y mi valor es: "+$especialito.find("select").parent().next().children().eq(0).val());
        }
        else{
            alert("ha ha");
        }
        
    });

    $deshabil.one("click", function () {
        alert("deshabilitando todos los li excepto "+ $deshabil.children().eq(0).text());
        for (let index = 0; index < $deshabil.children().length; index++) {
            $deshabil.children()[index] == $deshabil.children()[0]?
            $deshabil.children().eq(index).addClass("current"):
            $deshabil.children().eq(index).addClass("disabled");    
        }
    });

})