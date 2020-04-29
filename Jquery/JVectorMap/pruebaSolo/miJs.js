$(document).ready(function () {
    
    $('.aa').vectorMap({
        map: 'es',
        series: {
            regions: [
                {
                    values: 1,
                    scale: ['#FFFFFF', '#FF0000'],
                    normalizeFunction: 'polynomial'
                }
                
            ]
        }, 
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (INFECTADOS: '+gdpData[code]+')');
        }
    });
    
    });