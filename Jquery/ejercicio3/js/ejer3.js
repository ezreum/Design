$(document).ready(function() {
    
    //var alts = $("[alt]");

    var $lista = $("#myList");
    var $entrada = $(":input");
    var $ahora = $(".current");
    var $siguiente = $ahora.next();

    var $especialito=$("div#specials");

    var $deshabil = $("#slideshow");

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





})