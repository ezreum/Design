$(document).ready(function() {
    
    $("html").on("click",function(e) {
        if (!e.target.id=='' ) {
            $("body").css('background-color', e.target.id); 
        }

    });

    $(".me").hover(function (e) {
        console.log("clickó horizontalmente en: "+e.pageX+". Y verticalmente en: "+e.pageY);
        var $color = $("<span></span>").text(e.target.id);
        $color.css("color","grey");
        //$color.css("position:absolute", e.pageX);
        $("body").append($color);
        }, function () {
        $("body").children().last().remove();
        }
    );


});