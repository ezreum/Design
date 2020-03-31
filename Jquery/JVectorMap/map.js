var gdpData = {
    //MADRID
    "ES-M" : 10000,
    //<<CASTILLA LA MANCHA>>
    //GUADALAJARA
    "ES-GU" : 200,
    //TOLEDO
    "ES-TO" : 400,
    //ALBACETE
    "ES-AB" : 150,
    //CUENCA
    "ES-CU" : 300,
    //CIUDAD REAL
    "ES-CR" : 0000,
    //<<CATALUÑA>>
    //BARCELONA
    "ES-B" : 12000,
    //GERONA
    "ES-" : 0000,
    //TARRAGONA
    "ES-" : 0000,
    //LERIDA
    "ES-" : 0000,
    //<<ANDALUCIA>>
    //SEVILLA
    "ES-" : 0000,
    //HUELVA
    "ES-" : 0000,
    //CADIZ
    "ES-" : 0000,
    //CORDOBA
    "ES-" : 0000,
    //MALAGA
    "ES-" : 0000,
    //GRANADA
    "ES-" : 0000,
    //JAEN
    "ES-" : 0000,
    //ALMERIA
    "ES-" : 0000,
    //<<COMUNIDAD VALENCIANA>>
    //VALENCIA
    "ES-" : 0000,
    //CASTELLON
    "ES-" : 0000,
    //ALICANTE
    "ES-" : 0000,
    //<<GALICIA>>
    //A CORUÑA
    "ES-" : 0000,
    //LUGO
    "ES-" : 0000,
    //PONTEVEDRA
    "ES-" : 0000,
    //OURENSE
    "ES-" : 0000,
    //<<CASTILLA Y LEON>>
    //LEON
    "ES-" : 0000,
    //PALENCIA
    "ES-" : 0000,
    //BURGOS
    "ES-" : 0000,
    //SORIA
    "ES-" : 0000,
    //ZAMORA
    "ES-" : 0000,
    //VALLADOLID
    "ES-" : 0000,
    //SEGOVIA
    "ES-" : 0000,
    //SALAMANCA
    "ES-" : 0000,
    //AVILA
    "ES-" : 0000,
    //<<PAIS VASCO>>
    //ALAVA
    "ES-" : 0000,
    //GUIPUZCUA
    "ES-" : 0000,
    //VIZCAYA
    "ES-" : 0000,
    //<<CANARIAS>>
    "ES-" : 0000,
    //<<BALEARES>>
    "ES-" : 0000,
    //<<CEUTA>>
    "ES-" : 0000,
    //<<MELILLA>>
    "ES-" : 0000,
    //SIN DEFINIR
    "UNDEFINED": 0
};

$('.tree').vectorMap({
    map: 'es_merc',
    series: {
        regions: [
            {
                values: gdpData,
                scale: ['#FFFFFF', '#FF0000'],
                normalizeFunction: 'polynomial'
            }
            
        ]
    }, 
    onRegionTipShow: function(e, el, code){
        el.html(el.html()+' (INFECTADOS: '+gdpData[code]+')');
    }
});