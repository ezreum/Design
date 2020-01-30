$(document).ready(function() {
    
    //por convención a las variables que encierran un objeto se suelen tratar con un dolar delante
    var $cont= $("div.module");

    var $tercerLista = $("#myList").children().eq(2);
    var $tercerLista1 = $("#myList").children().first().next().next();
    var $tercerLista2 = $("#myList").find("li").eq(2);

    var $label = $("input.input_text");



    $cont.click(function() {
        if ( $cont.length>0 ) {
            alert("hay "+$cont.length+" divs de clase modulo");
        }
    }) 

    $tercerLista2.click(function() {
        if ( $tercerLista2.length>0 ) {
            alert("hay "+$tercerLista2.length+" elementos");
        }
    }) 

    $label.closest("label").on("click", function() {
        alert($label.closest("label").val());
    })

})




