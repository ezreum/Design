$(document).ready(function() {
    
    //por convención a las variables que encierran un objeto se suelen tratar con un dolar delante
    var $cont= $("div.module");

    var $tercerLista = $("#myList").children().eq(2);
    var $tercerLista1 = $("#mylist").childen().has();
    var $tercerLista2 = ;

    $cont.click(function() {
        if ( $cont.length>0 ) {
            alert("hay "+$cont.length+" divs");
        }
    }) 

    $tercerLista.click(function() {
        if ( $tercerLista.length>0 ) {
            alert("hay "+$tercerLista.length+" elementos");
        }
    }) 


})