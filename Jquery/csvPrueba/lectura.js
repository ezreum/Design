function processing(){
    var archivo = document.getElementsByTagName("input")[0].files[0];
    var lector = new FileReader();

    lector.readAsText(archivo, 'UTF-8');

    lector.onload = function(event) {

        var csv = event.target.result;
        
        var rows = csv.split('\n');
        
        for (var row of rows) {
            var trozos = row.split('"');
            document.getElementsByTagName("div")[0].innerHTML+=row+'<hr/>';
            //alert(trozos[0]);
           /*  for (var trozo of trozos) {
                document.getElementsByTagName("div")[0].innerHTML+=trozo+'<hr/>';

            } */
        }
    }

}