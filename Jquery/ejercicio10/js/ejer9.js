$(document).ready(function () {
    
    setInterval(moverImagen,4000);

    function moverImagen() {
        
        var $fater=$('#rotatorio');
        var $divi = $fater.children().first();
        $divi.appendTo($fater);
        
        $fater.children().last().toggleClass("desvanecido");
        $fater.children().first().removeClass("desvanecido");
        $fater.children().first().show(1000);

    }

});