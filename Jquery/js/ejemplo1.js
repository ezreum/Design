$(document).ready(function() {
    
    //por convención a las variables que encierran un objeto se suelen tratar con un dolar delante
    var $a = $("p");
  
    $a.click(function() {
        if ( $a.length>0 ) {
            alert("hay algún párrafo");
        }
    }) 
})