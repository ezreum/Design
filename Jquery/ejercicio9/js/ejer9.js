$(document).ready(function () {
    
    $('button').on("click", function() {
        
        $('#imagen').animate({ backgroundSize: '175%'
         
        })
    })



    $('.cuadrantes').hover( 
        
        function() {
        if ($(this).attr("id") == "uno") {
            $('#imagen').css('background-position','left top');
            $('#imagen').animate({ backgroundSize: '175%'   
        })
        }

        else if ($(this).attr("id") == "dos") {
            $('#imagen').css('background-position','right top');
            $('#imagen').animate({ backgroundSize: '175%'   
        })
        }

        else if ($(this).attr("id") == "tres") {
            $('#imagen').css('background-position','left bottom');
            $('#imagen').animate({ backgroundSize: '175%'   
        })
        }

        else {
        $('#imagen').css('background-position','right bottom');
        $('#imagen').animate({ backgroundSize: '175%'   
            })
        }
    },

    function() {
        $('#imagen').finish();
        $('#imagen').css('background-position','center');
            $('#imagen').animate({ backgroundSize: '100%'   
        })
      }

    );


});