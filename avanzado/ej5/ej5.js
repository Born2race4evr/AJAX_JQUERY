function cargarPaises() {
    
    var url = "https://restcountries.com/v3.1/region/europe";

    $.getJSON(url, function(datos) {
        var paises = "";
        $.each(datos, function(indice, pais) {
            var nombre = pais.name.common;

            paises += "<li>" + nombre + "</li>";
        });

        $("#listaPaises").html(paises);
    });
}