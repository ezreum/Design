$(document).ready(function() {
    
    //var alts = $("[alt]");

    var $lista = $("#myList");

    var $modulo = $("div.module");

    var $seleccion = $("div.module").find("select");

    var divero = $("<div class=\"module\"></div>").html($("img"));

    $("body").append(divero);

    $lista.one("click", function() {

        var element ="";
        alert("insertando elementos");
        for (let i = 0; i < 5; i++) {
            element += "<li>elemento li</li>";
        }
        $lista.append(element);

        alert("quitando los elementos impares");
        var t=[];
        for (let e = 0; e < $lista.children().length; e++) {
            e%2==1?'':t.push(e);
        }

        for (let index = t.length-1; index >= 0 ; index--) {
            $lista.children().eq(t[index]).remove();
        }

    });


    $modulo.one("click", function(){
        alert("insertando cabecera y párrafo JQUERY style");
        var cabecera = $("<h2></h2>").text("Otro h2");
        var p = $("<p></p>").text("Otro párrafo");
        $modulo.append(cabecera,p);
    });

    


    $seleccion.one("click", function(){
        alert("insertando wednesday");
       var $opcion = $("<option></option>").text("wednesday");
       $seleccion.append($opcion);
    });


});