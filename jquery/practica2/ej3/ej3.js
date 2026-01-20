function mostrarXML() {
    $.get("ej3.xml", function(xml) {
        var emisor = $(xml).find("emisor").text();
        var mensaje = $(xml).find("mensaje").text();
        
        $("#contenedor").html(emisor + "<br>" + mensaje);
    });
}

/*
HECHO POR SI HAY MAS CATEGORIAS

function mostrarXML() {
    $.get("ej3.xml", function(xml) {
        $("#contenedor").empty();

        $(xml).find("libro").each(function() {
            var tit = $(this).find("titulo").text();
            var aut = $(this).find("autor").text();

            $("#contenedor").append("<p>Juego: " + tit + " - Empresa: " + aut + "</p>");
        });
    });
}
*/