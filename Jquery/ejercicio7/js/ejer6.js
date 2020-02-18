$(document).ready(function() {
    var $todo = $("html");
    var cuadradin = cuadrado.creator();
    $todo.on("keydown", function(e){
        if (e.which==37){
            cuadradin.x -= 10;
            cuadrado.creator2(cuadradin);
        }
        else if(e.which==38){
            cuadradin.y -= 10;
            cuadrado.creator2(cuadradin);
        }
        else if(e.which==39){
            cuadradin.x += 10;
            cuadrado.creator2(cuadradin);
        }
        else if(e.which==40){
            cuadradin.y += 10;
            cuadrado.creator2(cuadradin);
        }
    });
    
});