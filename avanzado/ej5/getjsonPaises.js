function cargarPaises() {
    
    var url = "https://restcountries.com/v3.1/rion/europe";

    $.getJSON(url)
        
        .done(function(datos) {
            var paises = "";
            
            $.each(datos, function(indice, pais) {
                var nombre = pais.name.common;
                paises += "<li>" + nombre + "</li>";
            });

            $("#listaPaises").html(paises);
        })

        .fail(function(xhr, status, error) {
            alert(xhr.status); //codigo error
            alert(xhr.statusText); //texto error
        });
}