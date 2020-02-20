$(document).ready(function() {

    var $listas = $('.elemento');
    
    $listas.eq(0).on("click",function name() {
        //$listas.fadeToggle();
        $(this).next().find('li').slideToggle("fast");
        
    });

    $listas.eq(1).on("click",function name() {
        //$listas.fadeToggle();
        $(this).next().find('li').slideToggle();
        
    });

    $listas.eq(2).on("click",function name() {
        //$listas.fadeToggle();
        $(this).next().find('li').slideToggle("slow");
        
    });

});