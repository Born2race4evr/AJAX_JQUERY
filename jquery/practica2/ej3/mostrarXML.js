//SI HAY UN NIVEL MENOS
/*function mostrarXML() {
    $.get("ej3.xml", function(xml) {
        var emisor = $(xml).find("emisor").text();
        var mensaje = $(xml).find("mensaje").text();
        
        $("#contenedor").html(emisor + "<br>" + mensaje);
    });
}*/



function mostrarXML() {
    $.get("ej3.xml", function(xml) {
        
        $("#contenedor").empty();

        $(xml).find("nota").each(function() {
            
            var emisor = $(this).find("emisor").text();
            var mensaje = $(this).find("mensaje").text();

            $("#contenedor").append(
                "<strong>Emisor:</strong> " + emisor + "<br>" + 
                "<strong>Mensaje:</strong> " + mensaje + "<br>"
            );
        });
    });
}
