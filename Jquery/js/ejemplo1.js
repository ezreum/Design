$(document).ready(function() {
    
    //por convención a las variables que encierran un objeto se suelen tratar con un dolar delante
    var $a = $("p");
  
    $a.click(function() {
        if ( $a.length>0 ) {
            var texto = $a.length!=1?'s':'';
            alert("hay "+$a.length+" párrafo"+texto);
        }
    }) 
})